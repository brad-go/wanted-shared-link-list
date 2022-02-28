import axios from 'axios';
import { ApiReturnType } from 'types';

const { REACT_APP_API_POINT }: any = process.env;
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export const fetchApi = async () => {
  return axios
    .get<ApiReturnType[]>(`${PROXY}${REACT_APP_API_POINT}`)
    .then((res) => res.data);
};
