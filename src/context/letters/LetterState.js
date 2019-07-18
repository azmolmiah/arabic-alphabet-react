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
  SET_COLUMNS,
  SET_HEIGHT
} from '../types';

const LetterState = props => {
  const initialState = {
    letters: [],
    current: 0,
    storageCurrent: JSON.parse(localStorage.getItem('pageNumber')),
    gridColumns: 'repeat(5, 1fr)',
    bookmark: null,
    loading: false,
    height: '5.53rem'
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

  // //  Set Bookmark
  // const setBookmark = async () => {
  //   await dispatch({
  //     type: SET_BOOKMARK,
  //     payload: 'fas fa-bookmark pl-3'
  //   });
  // };

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

  // Change the letter sizes depending on current page
  const currentPageLetterSize = currentPage => {
    if (currentPage === 0) {
      console.log(currentPage);
      dispatch({
        type: SET_COLUMNS,
        payload: 'repeat(5, 1fr)'
      });
      dispatch({
        type: SET_HEIGHT,
        payload: '5.52rem'
      });
    } else if (currentPage === 1 || currentPage === 2) {
      dispatch({
        type: SET_COLUMNS,
        payload: 'repeat(6, 1fr)'
      });
      dispatch({
        type: SET_HEIGHT,
        payload: '3.5rem'
      });
    }
  };

  // Get next page
  const next = e => {
    setLoading();

    e.nativeEvent.target.parentNode.children[1].selectedIndex =
      state.current + 1;

    removeBookmark(state.storageCurrent, state.current + 1);

    currentPageLetterSize(state.current + 1);

    dispatch({
      type: GET_NEXT,
      payload: state.current + 1
    });
  };

  // Get previous page
  const prev = async e => {
    setLoading();

    e.persist();
    e.target.parentNode.children[1].selectedIndex = state.current - 1;

    removeBookmark(state.storageCurrent, state.current);

    currentPageLetterSize(state.current - 1);

    await dispatch({
      type: GET_PREV,
      payload: state.current - 1
    });
  };

  // Get option page
  const options = e => {
    setLoading();

    removeBookmark(state.storageCurrent, e.nativeEvent.target.selectedIndex);

    currentPageLetterSize(e.nativeEvent.target.selectedIndex);

    dispatch({
      type: GET_OPTIONS,
      payload: e.nativeEvent.target.selectedIndex
    });
  };

  // Store Letters to storage
  const storeLetters = async e => {
    e.persist();
    const pageNumber =
      e.nativeEvent.path[3].children[2].children[0].children[0].children[0]
        .children[1].value;

    await localStorage.setItem('pageNumber', JSON.stringify(state.current));

    removeBookmark(parseInt(pageNumber), state.current);
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
        gridColumns: state.gridColumns,
        height: state.height,
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
