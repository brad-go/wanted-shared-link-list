import axios from 'axios';
import { API_URL } from 'constants/api';
import { ApiReturnType } from 'types';

const { REACT_APP_API_ENDPOINT } = process.env;

export const fetchApi = async () => {
  return axios.get<ApiReturnType[]>(API_URL).then((res) => res.data);
};
