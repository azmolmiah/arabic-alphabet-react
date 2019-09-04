import {
  GET_LETTERS,
  GET_NEXT,
  GET_PREV,
  GET_OPTIONS,
  GET_STORAGE,
  SET_LOADING,
  SET_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_WIDTH,
  SET_HEIGHT
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
        current: action.payload + 1,
        loading: false
      };
    case GET_PREV:
      return {
        ...state,
        current: action.payload - 1,
        loading: false
      };
    case GET_OPTIONS:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case GET_STORAGE:
      return {
        ...state,
        current: action.payload
      };
    case SET_BOOKMARK:
      return {
        ...state,
        bookmark: action.payload
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmark: action.payload
      };
    case SET_WIDTH:
      return {
        ...state,
        width: action.payload
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload
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
