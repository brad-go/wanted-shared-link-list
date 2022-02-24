export const changeUnixToDate = (number: number): Date => {
  return new Date(number);
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
