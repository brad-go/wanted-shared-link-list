import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from 'api';
import { Error404Page } from 'pages';
import Button from 'components/Button';
import useExpire from 'hooks/useExpire';
import {
  changeUnixToDate,
  changeToReadableFileSize,
  calcExpirationDate,
  addCommaToNumber,
  handleLinkUrl,
  getCurrentUrl,
} from 'utils';
import { API_DEFAULT_DATA } from 'constants/api';
import { EXPIRE, SUBJECTLESS } from 'constants/string';
import type { ApiReturnType, FilesType } from 'types';
import styled from 'styled-components';
import colors from 'styles/colors';

const DetailPage: FC = () => {
  const { currentKey } = useParams();
  const [link, setLink] = useState<ApiReturnType>(API_DEFAULT_DATA);
  const { expire } = useExpire(link);

  const handleFileList = (fileList: FilesType[]) =>
    fileList.map(({ key, name, size, thumbnailUrl }) => (
      <FileListItem key={key}>
        <FileItemInfo thumbnailUrl={thumbnailUrl}>
          <span />
          <span>{name}</span>
        </FileItemInfo>
        <FileItemSize>{changeToReadableFileSize(size)}</FileItemSize>
      </FileListItem>
    ));

  const handleDownload = () => {
    if (expire !== '만료됨') alert('다운로드 되었습니다.');
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApi();
        const payload = data.filter(({ key }) => key === currentKey)[0];
        setLink(payload);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      {link ? (
        <>
          <Header>
            <LinkInfo>
              <Title>{link.sent ? link.sent.subject : SUBJECTLESS}</Title>
              <Url onClick={(e) => handleLinkUrl(e, link, expire)}>
                {calcExpirationDate(link.expires_at) === EXPIRE
                  ? expire
                  : getCurrentUrl()}
              </Url>
            </LinkInfo>
            <DownloadButton onClick={handleDownload}>
              <DownloadLink
                href={expire !== '만료됨' ? link.summary : void 0}
                download={expire !== '만료됨' ? true : false}
              >
                <img
                  referrerPolicy="no-referrer"
                  src="/svgs/download.svg"
                  alt="download image"
                />
                받기
              </DownloadLink>
            </DownloadButton>
          </Header>
          <Article>
            <Descrition>
              <Texts>
                <Top>링크 생성일</Top>
                <Bottom>{changeUnixToDate(link.created_at)}</Bottom>
                <Top>메세지</Top>
                <Bottom>
                  {link.sent?.content ? link.sent.content : '내용이 없습니다'}
                </Bottom>
                <Top>다운로드 횟수</Top>
                <Bottom>{link.download_count}</Bottom>
              </Texts>
              <LinkImage>
                <Image thumbnailUrl={link.thumbnailUrl} />
              </LinkImage>
            </Descrition>
            {expire !== EXPIRE && (
              <>
                <ListSummary>
                  <div>총 {addCommaToNumber(link.count)}개의 파일</div>
                  <div>{changeToReadableFileSize(link.size)}</div>
                </ListSummary>
                <FileList>{handleFileList(link.files)}</FileList>
              </>
            )}
          </Article>
        </>
      ) : (
        <Error404Page />
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;

const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;

  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

const DownloadLink = styled.a`
  all: unset;
`;

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.span<{ thumbnailUrl: string }>`
  width: 120px;
  display: inline-block;
  background-image: ${({ thumbnailUrl }) =>
    thumbnailUrl ? `url(${thumbnailUrl})` : `url(/svgs/default.svg)`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div<{ thumbnailUrl: string }>`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-image: ${({ thumbnailUrl }) =>
      thumbnailUrl ? `url(${thumbnailUrl})` : `url(/svgs/adefltu.svg)`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const FileItemSize = styled.div``;

export default DetailPage;
