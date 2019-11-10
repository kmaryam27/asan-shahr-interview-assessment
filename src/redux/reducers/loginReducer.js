
// const INITIAL_STATE = {
//   isSignedIn : null,
//   userId: null
// }

// export default (state= INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignedIn: true, userId: action.payload}
//     case SIGN_OUT:
//       return {...state, isSignedIn: false, userId: null}
//     default:
//       return state;
//   }
// }


//*************** */
const loginReducer = (state = false, action) => {
  switch(action.type){
      case 'SIGN_IN':
        return [!state, ...action.payload];
      default:
          return state;    
  }
}
export default loginReducer;

// import {FETCH_USER} from '../action/Users.action';
// let initialState = [];

// const userReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'FETCH_USER':
//             return [...state, ...action.payload];
//         default:
//             return state;    
//     }
// }

// export default userReducer;