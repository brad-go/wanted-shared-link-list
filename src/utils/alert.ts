import type { ApiReturnType } from 'types';

export const handleLinkUrl = (
  e: React.MouseEvent<HTMLElement>,
  link: ApiReturnType,
) => {
  e.stopPropagation();
  const urlText = e.currentTarget.innerHTML;
  navigator.clipboard.writeText(urlText).then(
    () => {
      alert(
        `${
          link.sent ? link.sent.subject : '제목 없음'
        } 주소가 복사 되었습니다.`,
      );
    },
    () => {
      alert('주소 복사가 실패 되었습니다.');
    },
  );
};
