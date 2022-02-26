import axios from 'axios';
import { ApiReturnType } from 'types';

const { REACT_APP_API_POINT }: any = process.env;
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export const fetchApi = async () => {
  return axios
    .get<ApiReturnType[]>(`${PROXY}${REACT_APP_API_POINT}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
      },
    })
    .then((res) => res.data);
};
