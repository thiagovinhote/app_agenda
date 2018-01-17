import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjIxMzYyNSwiZXhwIjoxNTE2MzAwMDI1fQ.QFx_Nd-qJbQSDk2nSn7ekbrV3aCk0pHjb0oj-0ipd_E',
);

export default api;
