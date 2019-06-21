import React from 'react';
import PropTypes from 'prop-types';

const NavbarHeader = ({ storeLetters, showBookMarked }) => {
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
          <div id='getBookMark' className='float-right pr-2'>
            getBookmark
          </div>
        </a>
      </div>
    </div>
  );
};

NavbarHeader.propTypes = {
  storeLetters: PropTypes.func.isRequired,
  showBookMarked: PropTypes.bool.isRequired
};

export default NavbarHeader;
