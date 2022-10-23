import * as api from '../api';

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


export const getPosts = () => async(dispatch)=> {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data })

  } catch(error) {
    console.log(error.message);
  }
  
}