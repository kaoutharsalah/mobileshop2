export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
import { GET_CART } from '../action/actionType';
const INITIAL_STATE = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.paylod.data,
        totalQuantity: action.paylod.totalQuantity,
        totalAmount: action.paylod.totalAmount,


      }

    case REMOVE_FROM_CART:
      return {}
    case GET_CART:
      return {
        ...state,

        items: action.paylod,

      }

    default:
      return state;

  }
};

export default cartReducer;