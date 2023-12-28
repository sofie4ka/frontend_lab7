import { PRODUCTS_URL } from '../data/api-urls';

export const getProducts = () => {
  return fetch(PRODUCTS_URL)
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to fetch products');
      }
      
      return response.json();
    });
};