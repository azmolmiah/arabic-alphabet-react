import React, { useContext } from 'react';
import Select from '../pagenavigation/Select';
import Next from '../pagenavigation/Next';
import Prev from '../pagenavigation/Prev';
import LetterContext from '../../context/letters/letterContext';

const NavbarFooter = () => {
  const letterContext = useContext(LetterContext);

  return (
    <div id='bottom-nav' className='fixed-bottom'>
      <div className='bg-dark py-2'>
        <div className='container'>
          <div className='clearfix d-flex flex-row '>
            <Next />

            <Select optionOnChange={letterContext.options} />

            <Prev />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFooter;
