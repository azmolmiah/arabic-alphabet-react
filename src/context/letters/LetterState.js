import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LetterContext from './letterContext';
import LetterReducer from './letterReducer';
import {
  GET_LETTERS,
  GET_NEXT,
  GET_PREV,
  GET_OPTIONS,
  SET_STORAGE,
  GET_STORAGE,
  SET_LOADING
} from '../types';

const LetterState = props => {
  const initialState = {
    letters: [],
    current: 0,
    storageCurrent: JSON.parse(localStorage.getItem('pageNumber')),
    loading: false
  };

  const [state, dispatch] = useReducer(LetterReducer, initialState);

  // Init letters
  useEffect(() => {
    getLetters(state.current);
    // eslint-disable-next-line
  }, [state.current]);

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

  // Get next page
  const next = e => {
    setLoading();

    e.persist();
    e.target.parentNode.children[1].selectedIndex = state.current + 1;

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

    dispatch({
      type: GET_PREV,
      payload: state.current - 1
    });
  };

  // Get option page
  const options = e => {
    setLoading();

    dispatch({
      type: GET_OPTIONS,
      payload: e.nativeEvent.target.selectedIndex
    });
  };

  // Store Letters to storage
  const storeLetters = e => {
    e.preventDefault();
    localStorage.setItem('pageNumber', JSON.stringify(state.current));
    dispatch({
      type: SET_STORAGE,
      payload: state.current
    });
  };

  // Get letters from storage
  const getStorageLetters = e => {
    e.preventDefault();
    e.persist();

    // Maybe find an alternative to this?
    e.nativeEvent.path[4].children[2].children[0].children[0].children[0].children[1].selectedIndex =
      state.storageCurrent;

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
