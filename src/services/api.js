import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWVhMzg4MGRiYzI2MDAxNDVhYWVjNCIsImlhdCI6MTUxNjU1MzkzMywiZXhwIjoxNTE2NjQwMzMzfQ.HgKeKCjOHzdHQqmJxnSl6udYFEs_t6PKCtTjoxcRMrA',
);

export default api;
