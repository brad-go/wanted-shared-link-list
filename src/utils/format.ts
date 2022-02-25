const DAYS_45 = 3888000;
const DAYS_30 = 2592000;
const TWO_DAYS = 172800000;
const MS = 1000;
const MM = 1000 * 60;
const HH = 1000 * 60 * 60;
const DD = 1000 * 60 * 60 * 24;

export const changeUnixToDate = (number: number): string => {
  const date: Date = new Date((number + DAYS_30) * 1000);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  const hour: string = String(date.getHours()).padStart(2, '0');
  const minute: string = String(date.getMinutes()).padStart(2, '0');
  const GMT: string = String(date)
    .slice(-14, -9)
    .replace(/(.{3})/g, '$1:');
  return `${year}년 ${month}월 ${day}일 ${hour}:${minute} ${GMT}`;
};

export const calcExpirationDate = (number: number): string => {
  const now: number = new Date().getTime();
  const exiration: number = (number + DAYS_30) * 1000;
  const restTime = exiration - now;

  const day = Math.abs(Math.trunc(restTime / DD));
  const hour = Math.abs(Math.trunc(restTime / HH));
  const minute = Math.abs(Math.trunc((restTime % HH) / MM));

  if (restTime > TWO_DAYS) return `${day}일`;
  if (restTime >= 0) return `${hour}시간 ${minute}분`;
  return `만료됨`;
};

export const changeToReadableFileSize = (size: number): string => {
  const BASE: number = 1024;
  const idx: number = Math.floor(Math.log(size) / Math.log(BASE));
  return (
    (size / Math.pow(BASE, idx)).toFixed(2) + ['B', 'KB', 'MB', 'GB', 'TB'][idx]
  );
};

export const addCommaToNumber = (number: number): string => {
  return number.toLocaleString();
};
