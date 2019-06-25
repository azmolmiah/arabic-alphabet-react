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
import { async } from 'q';

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
    getLetters(initialState.current);
    // eslint-disable-next-line
  }, [initialState.current]);

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
  const next = async e => {
    e.persist();

    await dispatch({
      type: GET_NEXT
    });

    e.target.parentNode.children[1].selectedIndex = initialState.current;
    console.log(initialState.current);
  };

  // Get previous page

  // Get option page

  // Store Letters to storage

  // Get letters from storage

  //Set laoding
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LetterContext.Provider
      value={{
        letters: state.letters,
        loading: state.loading,
        getLetters,
        next
      }}
    >
      {props.children}
    </LetterContext.Provider>
  );
};

export default LetterState;
