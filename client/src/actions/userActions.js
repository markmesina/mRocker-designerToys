import axios from 'axios';
import cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_ERROR } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/users/signin', { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        cookie.set('userInfo', JSON.stringify(data));

    } catch (e) {
        dispatch({ type: USER_SIGNIN_ERROR, payload: e.message })
    }

}

const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
    try {
        const { data } = await axios.post('/api/users/register', { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        cookie.set('userInfo', JSON.stringify(data));

    } catch (e) {
        dispatch({ type: USER_REGISTER_ERROR, payload: e.message })
    }

}

export {signin, register}