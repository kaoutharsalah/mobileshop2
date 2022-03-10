import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import cartReducer from './CartReducer';

import {productsReducer} from './[id]';

const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,
  productsReducer : productsReducer,
    Cart: cartReducer,
 
});

export default rootReducers;

