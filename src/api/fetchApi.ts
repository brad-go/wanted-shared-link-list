import axios from 'axios';
import { API_URL } from 'constants/api';
import { ApiReturnType } from 'types';

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
// // const PROXY = '/proxy';
// const URL = `${PROXY}${API_URL}`;
// console.log(URL);
const { REACT_APP_API_ENDPOINT }: any = process.env;

export const fetchApi = async () => {
  return axios
    .get<ApiReturnType[]>(REACT_APP_API_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
      },
    })
    .then((res) => res.data);
};
