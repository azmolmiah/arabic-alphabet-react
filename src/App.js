import React, { useState } from 'react';
import NavbarHeader from './components/layout/NavbarHeader';
import NavbarFooter from './components/layout/NavbarFooter';
import Letters from './components/letters/Letters';

import LetterState from './context/letters/LetterState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [storageCurrent, setStorageCurrent] = useState(
    JSON.parse(localStorage.getItem('pageNumber'))
  );
  const [loading, setLoading] = useState(false);

  // Initialise the letters / get letters everytime current is updated
  // useEffect(() => {
  //   getLetters(current);
  //   // eslint-disable-next-line
  // }, [current]);

  // Get next page

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

  // Store Letters to storage
  const storeLetters = e => {
    e.preventDefault();
    localStorage.setItem('pageNumber', JSON.stringify(current));
    setStorageCurrent(current);
  };

  // Get letters from storage
  const getStorageLetters = e => {
    e.preventDefault();
    setCurrent(storageCurrent);
  };

  return (
    <LetterState>
      <div className='App'>
        <NavbarHeader
          storeLetters={storeLetters}
          showBookMarked={storageCurrent === current ? true : false}
          getLetters={getStorageLetters}
        />
        <div className='container mt-2'>
          <Letters loading={loading} />
        </div>
        <NavbarFooter prevPage={prev} optionOnChange={options} />
      </div>
    </LetterState>
  );
};

export default App;
