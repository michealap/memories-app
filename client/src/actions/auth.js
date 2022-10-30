import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';
/** Redux workflow - once all inputs on form are filled in and submitted, we want to dispatch an action eg.signin with arguments formData and history found in `actions` folder. This action makes another call to api and makes a post request to check db and return. Once we have the data, dispatch data to the reducer  */
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch(error) {
    console.log(error);
  }
}

export const signup = (formData, history) => async(dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch(error) {
    console.log(error);
  }
}