import React, { Fragment, useState } from 'react';

const SoundControl = () => {
  const loopSound = new Audio();
  const [index, setIndex] = useState(0);

  // Get next letter sound in loop -> try and put this back in the reducer going to need it for saving the index
  // const nextSound = () => {
  //   for (let i = index; i <= letters.length; i++) {
  //     setIndex(i);
  //     loopSound.src = `audio/${letters[index].name}.mp3`;
  //     console.log(index);
  //     loopSound.play();
  //   }
  // };

  // Init loop to play all letters
  // const initLoop = () => {
  //   if (loopSound.paused) {
  //     nextSound();
  //   } else {
  //     loopSound.pause();
  //   }
  // };

  return (
    <Fragment>
      <a href='/' style={{ cursor: 'pointer' }}>
        <i className='fas fa-stop float-right pt-1' />
      </a>
      <a
        href='/'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // loopSound.paused ? nextSound() : loopSound.pause();
        }}
      >
        <i className='fas fa-play float-right pt-1 pr-2' />
      </a>
    </Fragment>
  );
};

export default SoundControl;
