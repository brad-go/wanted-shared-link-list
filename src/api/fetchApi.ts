import axios from 'axios';
import { API_URL } from 'constants/api';
import { ApiReturnType } from 'types';

export const fetchApi = async () => {
  return axios.get<ApiReturnType[]>(API_URL).then((res) => res.data);
};
