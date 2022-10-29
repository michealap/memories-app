import * as api from '../api';
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

/**  Notes 
 * Action creators - function that return actions
 * redux thunk allows to specify an additional redux function 
 * response returns { data }
 * eg. const action = {
    type: 'FETCH_ALL',
    payload: []
  }

  dispatch(action);
*/


export const getPosts = (page) => async(dispatch)=> {
  try {
    const { data } = await api.fetchPosts(page);

    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data })

  } catch(error) {
    console.log(error.message);
  }
  
}

export const getPostsBySearch = (searchQuery) => async(dispatch)=> {
  try {
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data })

  } catch(error) {
    console.log(error.message);
  }
  
}

export const createPost = (post) => async(dispatch)=> {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data })

  } catch(error) {
    console.log(error.message);
  }
  
}

export const updatePost = (id, post) => async(dispatch)=> {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data })

  } catch(error) {
    console.log(error.message);
  }
  
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};