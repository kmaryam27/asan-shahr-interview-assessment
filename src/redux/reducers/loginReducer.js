/**
 * @description LoginReducer for redux  just for test
 * @param {*} state 
 * @param {*} action 
 */
const loginReducer = (state = false, action) => {
  switch(action.type){
      case 'SIGN_IN':
        return [!state, ...action.payload];
      default:
          return state;    
  }
}
export default loginReducer;