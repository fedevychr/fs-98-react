import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://dummyjson.com',
});

// const instance2 = axios.create({
//   baseURL: 'http://qwerty.com',
// });

export const requestProducts = async () => {
  const { data } = await instance.get('/products');

  return data;
};

export const requestProductsByQuery = async (query = '') => {
  const { data } = await instance.get(`/products/search?q=${query}`);

  return data;
};

// export const requestProductsOnAnotherApi = async (query = '') => {
//   const { data } = await instance2.get(`/products/search?q=${query}`);

//   return data;
// };

export const requestProductsDetailsById = async productId => {
  const { data } = await instance.get(`/products/${productId}`);

  return data;
};
