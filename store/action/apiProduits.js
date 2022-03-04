import axios from 'axios';

export async function apiProduct(url, method, headers, params) {
  return params
    ? axios({
        method: method,
        url: url,
        data: params,
        headers: headers,
        timeout: 1000,
      })
    : axios({
        method: method,
        url: url,
        data: {},
        headers: headers,
        timeout: 1000,
      });
}

const GetApiProducts = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return apiProduct('http://localhost:3000/products-lists/q=10', 'GET', headers, {});
};
export default GetApiProducts;