import { ADD_COMIC } from "../constants/action-types";

const initialState = {
    comics: [],
  };
  function rootReducer(state = initialState, action) {

    if(action.type === ADD_COMIC){
      return Object.assign({}, state, {
        comics: state.comics.concat(action.payload)
      });
    }
    return state;
  };
  export default rootReducer;