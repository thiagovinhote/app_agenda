import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjQ5NTg4MywiZXhwIjoxNTE2NTgyMjgzfQ.RfdSUnmdGBs8-E_kIyemQDTPp6QoqcpTtTCeQoabMUg',
);

export default api;
