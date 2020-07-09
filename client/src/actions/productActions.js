import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_ERROR } from "../constants/productConstants";

const listProduct = () => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

  } catch (e) {

    dispatch({ type: PRODUCT_LIST_ERROR, payload: e.message })
  }
}

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const { userSignin: { userInfo } } = getState();
    const { data } = await axios.post('/api/products',
      product,
      { headers: { 'Authorization': 'Bearer' + userInfo.token } },
    );
    dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_SAVE_ERROR, payload: error.message });
  }

}

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get('/api/products/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

  } catch (e) {
    dispatch({ type: PRODUCT_DETAILS_ERROR, payload: e.message })
  }
}

export { listProduct, 
  detailsProduct,
  saveProduct,
 }