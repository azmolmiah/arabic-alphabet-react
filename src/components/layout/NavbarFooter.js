import React, { useContext } from 'react';
import Select from '../letters/Select';
import LetterContext from '../../context/letters/letterContext';

const NavbarFooter = () => {
  const letterContext = useContext(LetterContext);
  const { next, prev, options } = letterContext;

  return (
    <div id='bottom-nav' className='fixed-bottom'>
      <div className='bg-dark py-2'>
        <div className='container'>
          <div className='clearfix d-flex flex-row '>
            <button
              type='button'
              className='btn btn-outline-light float-left'
              onClick={next}
            >
              Next
            </button>

            <Select optionOnChange={options} />

            <button
              type='button'
              className='btn btn-outline-light float-right'
              onClick={prev}
            >
              Prev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFooter;
