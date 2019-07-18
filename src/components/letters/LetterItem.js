import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const images = `img/${letter.image}.png`;
  return <img src={images} alt='' style={{ height: letterContext.height }} />;
};

export default LetterItem;
