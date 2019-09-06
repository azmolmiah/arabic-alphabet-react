import React, { useContext, useState } from 'react';
import Bookmark from '../bookmark/Bookmark';
import LetterContext from '../../context/letters/letterContext';

const NavbarHeader = () => {
  const loopSound = new Audio();
  const [index, setIndex] = useState(0);

  const letterContext = useContext(LetterContext);

  const { getStorageLetters, letters } = letterContext;

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
    <div className='bg-dark py-3'>
      <div className='container'>
        <div className='float-left'>ReactQawaidApp</div>

        <Bookmark />

        <a href='/' style={{ cursor: 'pointer' }}>
          <i className='fas fa-stop float-right pt-1' />
        </a>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            // loopSound.paused ? nextSound() : loopSound.pause();
          }}
        >
          <i className='fas fa-play float-right pt-1 pr-2' />
        </div>

        <div
          style={{ cursor: 'pointer' }}
          className='float-right pr-2'
          onClick={getStorageLetters}
        >
          getBookmark
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
