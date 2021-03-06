
import { GET_PRODUCTS } from '../Reduxtype';


import GetApiProducts from './apiProduits';

export function ProductAction (productId){
  return function (dispatch) {
    return GetApiProducts(productId)
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Response', error);
      });
  };
};


