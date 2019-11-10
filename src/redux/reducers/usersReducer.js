import _ from 'lodash';


const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_USER':
          return _.mapKeys(action.payload, 'id');
        default:
            return state;    
    }
  }
  export default userReducer;

