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
  REMOVE_BOOKMARK
} from '../types';

const LetterState = props => {
  const initialState = {
    letters: [],
    current: 0,
    storageCurrent: JSON.parse(localStorage.getItem('pageNumber')),
    loading: false,
    bookmark: null
  };

  const [state, dispatch] = useReducer(LetterReducer, initialState);

  // Init letters
  useEffect(() => {
    getLetters(state.current);
    removeBookmark(state.storageCurrent, state.current);
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

  //  Set Bookmark
  const setBookmark = () => {
    dispatch({
      type: SET_BOOKMARK,
      payload: 'fas fa-bookmark pl-3'
    });
  };

  // Remove Bookmark
  const removeBookmark = (storageCurrent, current) => {
    if (storageCurrent !== current) {
      console.log('Bookmark removed...');
      dispatch({
        type: REMOVE_BOOKMARK,
        payload: 'far fa-bookmark pl-3'
      });
    } else {
      console.log('Bookmark added...');
      dispatch({
        type: SET_BOOKMARK,
        payload: 'fas fa-bookmark pl-3'
      });
    }
  };

  // Get next page
  const next = e => {
    setLoading();

    e.nativeEvent.target.parentNode.children[1].selectedIndex =
      state.current + 1;

    removeBookmark(state.storageCurrent, state.current + 1);

    dispatch({
      type: GET_NEXT,
      payload: state.current + 1
    });
  };

  // Get previous page
  const prev = e => {
    setLoading();

    e.persist();
    e.target.parentNode.children[1].selectedIndex = state.current - 1;

    removeBookmark(state.storageCurrent, state.current - 1);

    dispatch({
      type: GET_PREV,
      payload: state.current - 1
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

  // Store Letters to storage
  const storeLetters = async () => {
    await localStorage.setItem('pageNumber', JSON.stringify(state.current));
    setBookmark();
  };

  // Get letters from storage
  const getStorageLetters = e => {
    e.persist();

    // Maybe find an alternative to this?
    // e.nativeEvent.path[4].children[2].children[0].children[0].children[1].selectedIndex =
    //   state.storageCurrent;

    e.nativeEvent.path[3].children[2].children[0].children[0].children[0].children[1].selectedIndex =
      state.storageCurrent;

    removeBookmark(state.storageCurrent, state.current);

    dispatch({
      type: GET_STORAGE,
      payload: state.storageCurrent
    });
  };

  //Set laoding
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LetterContext.Provider
      value={{
        letters: state.letters,
        loading: state.loading,
        bookmark: state.bookmark,
        getLetters,
        next,
        prev,
        options,
        storeLetters,
        getStorageLetters
      }}
    >
      {props.children}
    </LetterContext.Provider>
  );
};

export default LetterState;
