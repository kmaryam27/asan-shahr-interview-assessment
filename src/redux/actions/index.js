
import axios from 'axios';
const API_KEY = '?key=HARRYPOTTER';

/**
 * @description get API with redux thunk for dashboard page
 */
export const getAllAds = () => {
  const request =  axios.get(`http://api.asanshahr.com/api/offers${API_KEY}`);
     return (dispatch) => {
         request
         .then(({data}) => 
             dispatch({
                 type: 'FETCH_ADS',//action name
                 payload: data//variable
             })
         )}
 }

 /**
  * @description login page action Not used yet
  * @param {*} email 
  * @param {*} password 
  */
export const signIn = (email, password) => {
    return {
      type: 'SIGN_IN',
      payload: {
        email:email,
        password: password
      }
    };
  }

  /**
   * @description login page action
   */
export const signOut = () => {
    return {
      type: 'SIGN_OUT'
    };
 }