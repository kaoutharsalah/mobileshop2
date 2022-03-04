export const GET_PRODUCTS ='GET_PRODUCTS'
const initialState = {
  products: [],
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;