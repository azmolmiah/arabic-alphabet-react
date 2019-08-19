import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const { height, letterWidth, current } = letterContext;
  const images = `img/${letter.image}.png`;

  if (letter.name === 'pagetitle' && current !== 2) {
    // If page title
    // Hint: try and see if an object can be passed isntead of all these if statements?
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
  } else if (
    letter.name === 'ckaafhayaaaynswaad' ||
    letter.name === 'hameemayngseenckaaf'
  ) {
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
  } else if (
    (letterContext.letters[14].name === letter.name && current === 3) ||
    (letterContext.letters[15].name === letter.name && current === 3) ||
    (letterContext.letters[16].name === letter.name && current === 3) ||
    (letterContext.letters[17].name === letter.name && current === 3) ||
    (letterContext.letters[19].name === letter.name && current === 3) ||
    (letterContext.letters[20].name === letter.name && current === 3) ||
    (letterContext.letters[21].name === letter.name && current === 3) ||
    (letterContext.letters[22].name === letter.name && current === 3) ||
    (letterContext.letters[23].name === letter.name && current === 3) ||
    (letterContext.letters[24].name === letter.name && current === 3) ||
    (letterContext.letters[26].name === letter.name && current === 3) ||
    (letterContext.letters[27].name === letter.name && current === 3)
  ) {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '25%'
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
