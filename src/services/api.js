import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apiagenda.herokuapp.com',
});

export const setAuthorization = (token) => {
  api.setHeader(
    'Authorization',
    `Bearer ${token}`,
  );
};

export default api;
