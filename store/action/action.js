import { GET_CATEGORIES } from '../Reduxtype';
import GetApiCategories from './apiCategories';
export const Action = () => {
  return function (dispatch) {
    return GetApiCategories()
      .then((res) => {
        console.log('res', res);
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

export const addToCart = () => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: any
    
  };
};
export const removeFromCart = () => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: Number
  };
};
