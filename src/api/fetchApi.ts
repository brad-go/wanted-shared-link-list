import axios from 'axios';
import { API_URL } from 'constants/api';
import { ApiReturnType } from 'types';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy/';
const URL = `${PROXY}${API_URL}`;

export const fetchApi = async () => {
  return axios.get<ApiReturnType[]>(`/api${API_URL}`).then((res) => res.data);
};
