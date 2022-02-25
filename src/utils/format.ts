export const changeUnixToDate = (number: number): string => {
  const date: Date = new Date(number * 1003);
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
