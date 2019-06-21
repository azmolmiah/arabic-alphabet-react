import React, { useState, useEffect } from 'react';
import NavbarHeader from './components/layout/NavbarHeader';
import NavbarFooter from './components/layout/NavbarFooter';
import Letters from './components/letters/Letters';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [letters, setLetters] = useState([]);
  const [current, setCurrent] = useState(0);
  const [storageCurrent, setStorageCurrent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialise the letters / get letters everytime current is updated
  useEffect(() => {
    getLetters(current);
    // eslint-disable-next-line
  }, [current]);

  // Get letters
  const getLetters = async currentIndex => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3001/letterspage${currentIndex}`
    );
    setLetters(res.data);
    setLoading(false);
  };

  // Get next page
  const next = e => {
    e.persist();
    setCurrent(current + 1);
    e.target.parentNode.children[1].selectedIndex = current + 1;
  };

  // Get previous page
  const prev = e => {
    e.persist();
    setCurrent(current - 1);
    e.target.parentNode.children[1].selectedIndex = current - 1;
  };

  // Get option page
  const options = e => {
    setCurrent(e.nativeEvent.target.selectedIndex);
  };

  // Store Letters from state
  const storeLetters = e => {
    e.preventDefault();
    localStorage.setItem('pageNumber', JSON.stringify(current));
    setStorageCurrent(JSON.parse(localStorage.getItem('pageNumber')));
  };

  return (
    <div className='App'>
      <NavbarHeader
        storeLetters={storeLetters}
        showBookMarked={storageCurrent === current ? true : false}
      />
      <div className='container mt-2'>
        <Letters loading={loading} letters={letters} />
      </div>
      <NavbarFooter nextPage={next} prevPage={prev} optionOnChange={options} />
    </div>
  );
};

export default App;
