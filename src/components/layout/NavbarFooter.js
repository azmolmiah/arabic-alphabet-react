import React from 'react';
import Select from '../letters/Select';
import PropTypes from 'prop-types';

const NavbarFooter = ({ nextPage, optionOnChange, prevPage }) => {
  return (
    <div id='bottom-nav' className='fixed-bottom'>
      <div className='bg-dark py-2'>
        <div className='container'>
          <div className='clearfix d-flex flex-row '>
            <button
              type='button'
              className='btn btn-outline-light float-left'
              onClick={nextPage}
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
  nextPage: PropTypes.func.isRequired,
  optionOnChange: PropTypes.func.isRequired
};

export default NavbarFooter;
