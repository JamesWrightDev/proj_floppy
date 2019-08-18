import { ADD_COMIC, CONSUME_API } from "../constants/action-types";

const initialState = {
    comicItems: [],
  };
  function rootReducer(state = initialState, action) {
    console.log(action);
    if(action.type === CONSUME_API){
      const data = action.payload;
      return { ...state, data}
    }
    if(action.type === ADD_COMIC){
      return Object.assign({}, state, {
        comics: state.comics.concat(action.payload)
      });
    }
    return state;
  };
  export default rootReducer;