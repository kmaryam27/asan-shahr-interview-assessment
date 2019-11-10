import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import selectedPostReducer from './selectedpost';
import usersReducer from './usersReducer'
import {  reducer as formReducer  } from 'redux-form';

export default combineReducers({
  loginReducer: loginReducer,
  selectedPostReducer: selectedPostReducer,
  usersReducer: usersReducer,
  form: formReducer
});