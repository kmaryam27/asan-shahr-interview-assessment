import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import selectedPostReducer from './selectedpost';
import adsReducer from './adsReducer'
import {  reducer as formReducer  } from 'redux-form';

export default combineReducers({
  loginReducer: loginReducer,
  selectedPostReducer: selectedPostReducer,
  adsReducer: adsReducer,
  form: formReducer
});