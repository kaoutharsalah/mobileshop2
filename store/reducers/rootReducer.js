import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import cartReducer from './CartReducer'
import productsReducer from './productsReducer';
const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,
  productsReducer : productsReducer,
  cartReducer : cartReducer,
});

export default rootReducers;

