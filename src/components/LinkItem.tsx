import React from 'react';
import Avatar from './Avatar';
import type { ApiReturnType } from 'types';
import { changeToReadableFileSize } from 'utils';
import colors from 'styles/colors';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

interface LinksProps {
  link: ApiReturnType;
}

const LinkItem = ({ link }: LinksProps) => {
  const navigate = useNavigate();
  const itemUrl = window.location.href;

  const handleReceiver = (emailList: string[]) =>
    emailList.map((email: string, idx: number) => (
      <Avatar text={email} key={idx} />
    ));

  const goDetail = () => {
    navigate(`/${link.key}`);
  };

  return (
    <>
      <TableRow onClick={goDetail}>
        <TableCell>
          <LinkInfo>
            <LinkImage>
              <img
                referrerPolicy="no-referrer"
                src={link.thumbnailUrl}
                alt={link.summary}
              />
            </LinkImage>
            <LinkTexts>
              <LinkTitle>
                {link.sent ? link.sent.subject : '제목 없음'}
              </LinkTitle>
              <LinkUrl>{itemUrl + link.key}</LinkUrl>
            </LinkTexts>
          </LinkInfo>
          <span />
        </TableCell>
        <TableCell>
          <span>파일개수</span>
          <span>{link.count}</span>
        </TableCell>
        <TableCell>
          <span>파일사이즈</span>
          <span>{changeToReadableFileSize(link.size)}</span>
        </TableCell>
        <TableCell>
          <span>유효기간</span>
          {/* !!!수정 필요!!! */}
          <span>48시간 00분</span>
        </TableCell>
        <TableCell>
          <span>받은사람</span>
          <LinkReceivers>
            {link.sent && handleReceiver(link.sent.emails)}
          </LinkReceivers>
        </TableCell>
      </TableRow>
    </>
  );
};

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export default LinkItem;
