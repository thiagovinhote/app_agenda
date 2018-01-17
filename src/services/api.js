import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjIxODkwNiwiZXhwIjoxNTE2MzA1MzA2fQ.A8QelaQb91wpRoIquqpdJrpB5_4OfSJ98kF4enCNA24',
);

export default api;
