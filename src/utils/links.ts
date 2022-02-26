import { EXPIRE, SUBJECTLESS } from 'constants/string';
import { calcExpirationDate } from './format';
import type { ApiReturnType } from 'types';

const ALERT_ADDRESS = [
  '주소가 복사 되었습니다.',
  '주소 복사가 실패 되었습니다.',
];

export const handleLinkUrl = (
  e: React.MouseEvent<HTMLElement>,
  link: ApiReturnType,
) => {
  if (calcExpirationDate(link.expires_at) === EXPIRE) return;
  e.stopPropagation();
  const urlText = e.currentTarget.innerHTML;
  navigator.clipboard.writeText(urlText).then(
    () => {
      alert(
        `${link.sent ? link.sent.subject : SUBJECTLESS} ${ALERT_ADDRESS[0]}`,
      );
    },
    () => {
      alert(ALERT_ADDRESS[1]);
    },
  );
};

export const getCurrentUrl = () => {
  return window.location.href;
};
