
import { GET_PRODUCTS } from '../Reduxtype';

import GetApiProducts from './apiProduct'
const ProductAction = () => {
  return function (dispatch) {
    return GetApiProducts()
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
};

export default ProductAction;