import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const images = `img/${letter.image}.png`;

  if (letterContext.letters[0].name === letter.name) {
    console.log(letterContext.letters[0].name);
    return (
      <img
        src={images}
        alt=''
        style={{
          height: letterContext.height,
          width: '100%'
        }}
      />
    );
  } else {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: letterContext.height,
          width: '6.05rem'
        }}
      />
    );
  }
};

export default LetterItem;
