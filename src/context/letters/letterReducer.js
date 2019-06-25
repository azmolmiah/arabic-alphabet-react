import {
  GET_LETTERS,
  GET_NEXT,
  GET_PREV,
  GET_OPTIONS,
  SET_STORAGE,
  GET_STORAGE,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LETTERS:
      return {
        ...state,
        letters: action.payload,
        loading: false
      };
    case GET_NEXT:
      return {
        ...state,
        current: state.current + 1,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        laoding: true
      };
    default:
      return state;
  }
};
