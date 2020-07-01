import axios from 'axios';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR } = require("../constants/productConstants")
const listProduct = () => async(dispatch) => {
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST});
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: PRODUCT_LIST_ERROR, payload: e.message })
    }
}

export { listProduct }