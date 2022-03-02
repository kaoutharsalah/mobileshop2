import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducers = combineReducers({
  categoriesReducer : categoriesReducer,
  productsReducer : productsReducer,
});

export default rootReducers;