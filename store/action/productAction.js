
import { GET_PRODUCTS } from '../Reduxtype';

import GetApiProducts from "./apiProduits"
const ProductAction = () => {
  return function (dispatch) {
    return GetApiProducts()
      .then((res) => {
        console.log('res ', res);
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

export default ProductAction;