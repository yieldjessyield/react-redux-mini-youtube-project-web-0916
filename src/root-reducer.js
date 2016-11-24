import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      //fill this in
    default:
      return state
  }
}


const rootReducer = combineReducers({reducer})

export default rootReducer
