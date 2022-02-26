import axios from 'axios';
import { API_URL } from 'constants/api';
import { ApiReturnType } from 'types';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
// const PROXY = '/proxy';
const URL = `${PROXY}${API_URL}`;
console.log(URL);

export const fetchApi = async () => {
  return axios.get<ApiReturnType[]>(URL).then((res) => res.data);
};
