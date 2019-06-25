import React, { useContext } from 'react';
import Select from '../letters/Select';
import PropTypes from 'prop-types';
import LetterContext from '../../context/letters/letterContext';

const NavbarFooter = ({ optionOnChange, prevPage }) => {
  const letterContext = useContext(LetterContext);

  return (
    <div id='bottom-nav' className='fixed-bottom'>
      <div className='bg-dark py-2'>
        <div className='container'>
          <div className='clearfix d-flex flex-row '>
            <button
              type='button'
              className='btn btn-outline-light float-left'
              onClick={letterContext.next}
            >
              Next
            </button>

            <Select optionOnChange={optionOnChange} />

            <button
              type='button'
              className='btn btn-outline-light float-right'
              onClick={prevPage}
            >
              Prev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarFooter.propTypes = {
  prevPage: PropTypes.func.isRequired,
  optionOnChange: PropTypes.func.isRequired
};

export default NavbarFooter;
