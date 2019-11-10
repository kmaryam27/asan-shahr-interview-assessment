import _ from 'lodash';

/**
 * @description not used just for test
 * @param {*} state 
 * @param {*} action 
 */
const adsReducer = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_ADS':
          return _.mapKeys(action.payload, 'id');
        default:
            return state;    
    }
  }
  export default adsReducer;

