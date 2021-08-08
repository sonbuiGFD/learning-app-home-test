import axios from 'axios';
import { defautToken, grantType, HostAPIENV } from 'config';

export const request = async ({
  host = '',
  url = '',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
  _token,
  _grantType,
  onUploadProgress,
}) => {
  const token = _token || defautToken;
  const resquestGrantType = _grantType || grantType;
  const uploadProgress = onUploadProgress || (() => {});

  const HostAPI = host || HostAPIENV;

  const res = await axios({
    url: `${HostAPI}${url}`,
    method,
    data,
    params,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `${resquestGrantType} ${token}`,
      ...headers,
    },
    onUploadProgress: uploadProgress,
  });
  return res;
};

export const fakeRequest = (response) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: response,
      });
    }, 1500);
  });

export default request;
