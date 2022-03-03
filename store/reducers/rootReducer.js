import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './CartReducer'
const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,
  productsReducer : productsReducer,
  cartReducer : cartReducer,
});

export default rootReducers;

