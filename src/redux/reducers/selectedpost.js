const INITIAL_STATE = {
  selected : null,
  isopen: false
}

/**
 * @description dashboardReducer for get the API data
 * @param {*} state 
 * @param {*} action 
 */
const selectedPostReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SELECTEDPOST':
            return { ...state, isopen: action.payload.isopen, selected: action.payload.selected}
        case 'CLOSEMODAL':
            return {...state, isopen: action.payload.isopen, selected: null}
        default:
            return state;    
    }
}
export default selectedPostReducer;