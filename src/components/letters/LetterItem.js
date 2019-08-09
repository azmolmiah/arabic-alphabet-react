import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const { height, letterWidth, current } = letterContext;
  const images = `img/${letter.image}.png`;

  if (letterContext.letters[0].name === letter.name && current !== 2) {
    // If page title
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '100%'
        }}
      />
    );
  } else {
    // If Letters
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: letterWidth
        }}
      />
    );
  }
};

export default LetterItem;
