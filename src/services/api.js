import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjMwNjQ2MiwiZXhwIjoxNTE2MzkyODYyfQ.pSFSiM4pt8BYJbsnEEVBVCtyMTFWE_BLgeROkzdHUqE',
);

export default api;
