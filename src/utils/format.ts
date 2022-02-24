export const changeUnixToDate = (number: number): string => {
  const date: Date = new Date(number * 1000);
  return date.toString();
};

export const changeToReadableFileSize = (size: number): string => {
  const BASE = 1024;
  const idx = Math.floor(Math.log(size) / Math.log(BASE));
  return (
    (size / Math.pow(BASE, idx)).toFixed(2) + ['B', 'KB', 'MB', 'GB', 'TB'][idx]
  );
};

export const addCommaToNumber = (number: number): string => {
  return number.toLocaleString();
};
