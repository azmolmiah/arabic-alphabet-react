import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const Bookmark = () => {
  const letterContext = useContext(LetterContext);
  const { storeLetters, bookmark } = letterContext;

  return (
    <i
      className={bookmark}
      style={{ cursor: 'pointer' }}
      onClick={storeLetters}
    />
  );
};

export default Bookmark;
