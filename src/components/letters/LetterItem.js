import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const { height, letterWidth, current } = letterContext;
  const images = `img/${letter.image}.png`;
  const secondHalfpg3 = letterContext.letters.slice(14, 27);

  if (letter.name === 'pagetitle' && current !== 2) {
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
  } else if (
    (letterContext.letters[10].name === letter.name && current === 3) ||
    (letterContext.letters[11].name === letter.name && current === 3) ||
    (letterContext.letters[12].name === letter.name && current === 3)
  ) {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '33.3%'
        }}
      />
    );
  } else if (letter.name === 'ckaafhayaaaynswaad') {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '50%'
        }}
      />
    );
  } else if (current === 3) {
    console.log(secondHalfpg3);
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
