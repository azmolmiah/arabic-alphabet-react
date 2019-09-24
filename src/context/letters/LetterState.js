import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LetterContext from './letterContext';
import LetterReducer from './letterReducer';

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

const LetterState = props => {
  const initialState = {
    letters: [],
    current: 0,
    storageCurrent: JSON.parse(localStorage.getItem('pageNumber')),
    bookmark: null,
    loading: false,
    height: null,
    width: null,
    soundIndex: 0
  };

  const [state, dispatch] = useReducer(LetterReducer, initialState);

  // Init letters
  useEffect(() => {
    getLetters(state.current);
    removeBookmark(state.storageCurrent, state.current);
    currentPageLetterSize(state.current);
    // eslint-disable-next-line
  }, [state.current, state.storageCurrent]);

  // Get letters
  const getLetters = async currentIndex => {
    setLoading();

    const res = await axios.get(
      `http://localhost:3001/letterspage${currentIndex}`
    );

    dispatch({
      type: GET_LETTERS,
      payload: res.data
    });
  };

  // Remove Bookmark
  const removeBookmark = (storageCurrent, current) => {
    if (storageCurrent !== current) {
      dispatch({
        type: REMOVE_BOOKMARK,
        payload: 'far fa-bookmark pl-3'
      });
    } else {
      dispatch({
        type: SET_BOOKMARK,
        payload: 'fas fa-bookmark pl-3'
      });
    }
  };

  // Change the letter sizes (exclude titles) depending on current page
  const currentPageLetterSize = currentPage => {
    if (currentPage === 0) {
      dispatch({
        type: SET_HEIGHT,
        payload: '4.75rem'
      });
      dispatch({
        type: SET_WIDTH,
        payload: '20%'
      });
    } else if (currentPage === 1 || currentPage === 2) {
      dispatch({
        type: SET_HEIGHT,
        payload: '3.32rem'
      });
      dispatch({
        type: SET_WIDTH,
        payload: '16.66%'
      });
    } else if (currentPage === 3) {
      dispatch({
        type: SET_HEIGHT,
        payload: '4.15rem'
      });
      dispatch({
        type: SET_WIDTH,
        payload: '20%'
      });
    }
  };

  // Get next page
  const next = async e => {
    setLoading();

    e.nativeEvent.target.parentNode.children[1].selectedIndex =
      state.current + 1;

    removeBookmark(state.storageCurrent, state.current);

    await dispatch({
      type: GET_NEXT,
      payload: 1
    });
  };

  // Get previous page
  const prev = async e => {
    setLoading();

    e.persist();
    e.target.parentNode.children[1].selectedIndex = state.current - 1;

    removeBookmark(state.storageCurrent, state.current);

    await dispatch({
      type: GET_PREV,
      payload: 1
    });
  };

  // Get option page
  const options = e => {
    setLoading();

    removeBookmark(state.storageCurrent, e.nativeEvent.target.selectedIndex);

    dispatch({
      type: GET_OPTIONS,
      payload: e.nativeEvent.target.selectedIndex
    });
  };

  // Get letters from storage
  const getStorageLetters = async e => {
    e.persist();

    e.nativeEvent.path[3].children[2].children[0].children[0].children[0].children[1].selectedIndex =
      state.storageCurrent;

    removeBookmark(state.storageCurrent, state.current);

    await dispatch({
      type: GET_STORAGE,
      payload: state.storageCurrent
    });
  };

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LetterContext.Provider
      value={{
        letters: state.letters,
        loading: state.loading,
        bookmark: state.bookmark,
        current: state.current,
        height: state.height,
        letterWidth: state.width,
        getLetters,
        next,
        prev,
        options,
        removeBookmark,
        getStorageLetters
      }}
    >
      {props.children}
    </LetterContext.Provider>
  );
};

export default LetterState;
