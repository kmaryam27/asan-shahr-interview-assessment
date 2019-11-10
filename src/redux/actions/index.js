
import axios from 'axios';
const API_KEY = '?key=HARRYPOTTER';

export const getAllUsers = () => {
  const request =  axios.get(`http://api.asanshahr.com/api/offers${API_KEY}`);
     return (dispatch) => {
         request
         .then(({data}) => 
             dispatch({
                 type: 'FETCH_USER',//action name
                 payload: data//variable
             })
         )}
 }

export const signIn = (email, password) => {
    return {
      type: 'SIGN_IN',
      payload: {
        email:email,
        password: password
      }
    };
  }

export const signOut = () => {
    return {
      type: 'SIGN_OUT'
    };
 }




export const selectedPost = (selected, isOpen) => {
  return {
    type: 'SELECTEDPOST',//action name
    payload: {
      selected,//variable
      isOpen
    }
  };
}

export const closeModal = (selected, isOpen) => {
  return {
    type: 'CLOSEMODAL',//action name
    payload: {
      selected,
      isOpen
    }
  };
}