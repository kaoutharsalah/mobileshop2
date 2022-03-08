import { GET_CATEGORIES } from '../Reduxtype';
import GetApiCategories from './apiCategories';
export function Action() {
  return function (dispatch) {
    return GetApiCategories()
      .then((res) => {
        //console.log('res', res);
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
};

export function addToCart(value) {
  return {
    type: ADD_TO_CART,
    payload: value,

  };
};
export function removeFromCart(value) {
  return {
    type: REMOVE_FROM_CART,
    payload: value,
  };
};
export function getCart(value) {
  return {
    type: GET_CART,
    payload: value,
  };
};


