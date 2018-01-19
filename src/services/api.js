import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjM4ODQ5OSwiZXhwIjoxNTE2NDc0ODk5fQ.RHYXAmj8TWiBVDOXDz-XgQ8eFbetEJCJkb23DMgIWwA',
);

export default api;
