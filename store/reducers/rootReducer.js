import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import { ProductsReducer } from './[id]';
import { selectedProductsReducer } from './[id]';
import {productsReducer} from './[id]';

const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,
  productsReducer : productsReducer,
    Cart: cartReducer,
  allProducts: ProductsReducer,
  product: selectedProductsReducer,
});

export default rootReducers;

