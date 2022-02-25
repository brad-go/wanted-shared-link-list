import { ApiReturnType } from 'types';

const { REACT_APP_API_ENDPOINT }: any = process.env;

export const API_URL: string = REACT_APP_API_ENDPOINT;

export const API_DEFAULT_DATA: ApiReturnType = {
  created_at: 0,
  key: '',
  expires_at: 0,
  download_count: 0,
  count: 0,
  size: 0,
  summary: '',
  thumbnailUrl: '',
  files: [],
};
