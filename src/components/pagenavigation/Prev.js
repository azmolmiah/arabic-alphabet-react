import React, { Fragment, useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const Prev = () => {
  const letterContext = useContext(LetterContext);
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-outline-light float-right'
        onClick={letterContext.prev}
      >
        Prev
      </button>
    </Fragment>
  );
};

export default Prev;
