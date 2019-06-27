import React, { useState } from 'react';
import NavbarHeader from './components/layout/NavbarHeader';
import NavbarFooter from './components/layout/NavbarFooter';
import Letters from './components/letters/Letters';

import LetterState from './context/letters/LetterState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [storageCurrent] = useState(
    JSON.parse(localStorage.getItem('pageNumber'))
  );

  return (
    <LetterState>
      <div className='App'>
        <NavbarHeader
          showBookMarked={storageCurrent === current ? true : false}
        />
        <div className='container mt-2'>
          <Letters />
        </div>
        <NavbarFooter />
      </div>
    </LetterState>
  );
};

export default App;
