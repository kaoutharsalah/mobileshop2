export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART ='REMOVE_FROM_CART'
const INITIAL_STATE = {


  items:[],

  totalQuantity:0,

  totalAmount: 0,
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state ,

          items : action.payload  }
      case REMOVE_FROM_CART:
        return { ...state ,


          items : action.payload  }
        default:
            return state;
    
    }
  };
  
export default cartReducer;