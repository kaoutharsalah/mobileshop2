import axios from 'axios';

export async function axiosRequest(url, method, headers, params) {
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

const GetApiCategories = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return axiosRequest('http://localhost:3000/categories', 'GET', headers, {});
 
};
export default GetApiCategories;