import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';
import PropTypes from 'prop-types';

const NavbarHeader = ({ showBookMarked }) => {
  const letterContext = useContext(LetterContext);

  const { storeLetters, getStorageLetters } = letterContext;

  return (
    <div className='bg-dark py-3'>
      <div className='container'>
        <div className='float-left'>ReactQawaidApp</div>
        <a href='/'>
          {showBookMarked ? (
            <i className='fas fa-bookmark pl-3' onClick={storeLetters} />
          ) : (
            <i className='far fa-bookmark pl-3' onClick={storeLetters} />
          )}
        </a>
        <a href='/'>
          <i id='stopBtn' className='fas fa-stop float-right pt-1' />
        </a>
        <a href='/'>
          <i id='playBtn' className='fas fa-play float-right pt-1 pr-2' />
        </a>
        <a href='/'>
          <div
            id='getBookMark'
            className='float-right pr-2'
            onClick={getStorageLetters}
          >
            getBookmark
          </div>
        </a>
      </div>
    </div>
  );
};

NavbarHeader.propTypes = {
  showBookMarked: PropTypes.bool.isRequired
};

export default NavbarHeader;
