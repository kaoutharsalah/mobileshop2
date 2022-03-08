import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createStore } from 'redux';
import rootReducers from './reducers/rootReducer';

const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default Store;


