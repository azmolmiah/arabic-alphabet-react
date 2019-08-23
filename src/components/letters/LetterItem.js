import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const LetterItem = ({ letter }) => {
  const letterContext = useContext(LetterContext);
  const { height, letterWidth, current, letters } = letterContext;
  const images = `img/${letter.image}.png`;

  const onClick = e => {
    const clickSound = new Audio();
    // Get id name of each sound image thats outputed
    clickSound.src = `audio/${e.target.id}.mp3`;
    if (clickSound.paused) {
      clickSound.play();
    }
  };

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
        id={letter.image}
        onClick={onClick}
      />
    );
  } else if (
    (letters[10].name === letter.name && current === 3) ||
    (letters[11].name === letter.name && current === 3) ||
    (letters[12].name === letter.name && current === 3)
  ) {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '33.3%'
        }}
        id={letter.image}
        onClick={onClick}
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
        id={letter.image}
        onClick={onClick}
      />
    );
  } else if (
    (letters[14].name === letter.name && current === 3) ||
    (letters[15].name === letter.name && current === 3) ||
    (letters[16].name === letter.name && current === 3) ||
    (letters[17].name === letter.name && current === 3) ||
    (letters[19].name === letter.name && current === 3) ||
    (letters[20].name === letter.name && current === 3) ||
    (letters[21].name === letter.name && current === 3) ||
    (letters[22].name === letter.name && current === 3) ||
    (letters[23].name === letter.name && current === 3) ||
    (letters[24].name === letter.name && current === 3) ||
    (letters[26].name === letter.name && current === 3) ||
    (letters[27].name === letter.name && current === 3)
  ) {
    return (
      <img
        src={images}
        alt=''
        style={{
          height: height,
          width: '25%'
        }}
        id={letter.image}
        onClick={onClick}
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
        id={letter.image}
        onClick={onClick}
      />
    );
  }
};

export default LetterItem;
