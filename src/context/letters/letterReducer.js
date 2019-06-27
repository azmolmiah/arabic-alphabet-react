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
        current: action.payload,
        loading: false
      };
    case GET_PREV:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case GET_OPTIONS:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case SET_STORAGE:
      return {
        ...state,
        current: action.payload
      };
    case GET_STORAGE:
      return {
        ...state,
        current: action.payload
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
