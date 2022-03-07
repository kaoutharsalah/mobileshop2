import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import cartReducer from './CartReducer';

const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,

  cartReducer: cartReducer,
});

export default rootReducers;

