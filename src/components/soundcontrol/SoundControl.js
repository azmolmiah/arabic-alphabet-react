import React, { Fragment, useContext, useState } from 'react';
import LetterContext from '../../context/letters/letterContext';

const SoundControl = () => {
  const sound = new Audio();
  const [index, setIndex] = useState(0);

  const letterContext = useContext(LetterContext);

  const { letters } = letterContext;

  // Get next letter sound in loop, do while causing infite loop and not incrementing.
  const nextSound = () => {
    if (index !== letters.length) {
      setIndex(index + 1);
      sound.src = `audio/${letters[index].name}.mp3`;
      sound.play();
    } else {
      sound.pause();
    }
  };

  return (
    <Fragment>
      <a href='#!' style={{ cursor: 'pointer' }}>
        <div className='float-right'>reset</div>
      </a>
      <a
        href='#!'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          sound.paused ? nextSound() : sound.paused();
        }}
      >
        <div className='float-right pr-2'>nextSound</div>
      </a>
    </Fragment>
  );
};

export default SoundControl;
