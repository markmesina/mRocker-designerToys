import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/productReducer';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
import { cartReducer } from './reducer/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducer/userReducers';

const cartItems = cookie.getJSON('cartItems') || [];
const userInfo = cookie.getJSON('userInfo') || null;

const initialState = { cart: { cartItems }, userSignin:{userInfo} };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, initialState, composeEnhancer(applyMiddleware(thunk))
  );

export default store;