import React, { useContext } from 'react';
import LetterItem from './LetterItem';
import Spinner from '../layout/Spinner';
import uniqid from 'uniqid';
import LetterContext from '../../context/letters/letterContext';

const Letters = () => {
  const letterContext = useContext(LetterContext);
  const { loading, letters } = letterContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: letterContext.gridColumns,
          gridTemplateRows: 'auto',
          maxWidth: '514px !important'
        }}
      >
        {letters.map(letter => {
          return <LetterItem key={uniqid()} letter={letter} />;
        })}
      </div>
    );
  }
};

export default Letters;
