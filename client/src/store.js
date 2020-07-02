import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/productReducer';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
import { cartReducer } from './reducer/cartReducers';

const cartItems = cookie.getJSON('cartItems') || []

const initialState = { cart: { cartItems } };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, initialState, composeEnhancer(applyMiddleware(thunk))
  );

export default store;