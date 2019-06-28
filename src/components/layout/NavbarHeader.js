import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';
import Bookmark from '../layout/Bookmark';

const NavbarHeader = () => {
  const letterContext = useContext(LetterContext);

  const { getStorageLetters } = letterContext;

  return (
    <div className='bg-dark py-3'>
      <div className='container'>
        <div className='float-left'>ReactQawaidApp</div>

        <Bookmark />

        <a href='/'>
          <i id='stopBtn' className='fas fa-stop float-right pt-1' />
        </a>
        <a href='/'>
          <i id='playBtn' className='fas fa-play float-right pt-1 pr-2' />
        </a>

        <div
          id='getBookMark'
          style={{ cursor: 'pointer' }}
          className='float-right pr-2'
          onClick={getStorageLetters}
        >
          getBookmark
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
