import React, { Fragment, useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const Next = () => {
  const letterContext = useContext(LetterContext);
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-outline-light float-left'
        onClick={letterContext.next}
      >
        Next
      </button>
    </Fragment>
  );
};

export default Next;
