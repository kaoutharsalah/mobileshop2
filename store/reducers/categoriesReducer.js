export const GET_CATEGORIES = 'GET_CATEGORIES';

const initialState = {
  categories: [],
};

const categoriesReducer = (state =initialState , action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
