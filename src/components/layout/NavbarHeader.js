import React, { useContext, useState } from 'react';
import LetterContext from '../../context/letters/letterContext';

const NavbarHeader = () => {
  const loopSound = new Audio();
  const [index, setIndex] = useState(0);

  const letterContext = useContext(LetterContext);

  const { getStorageLetters, storeLetters, bookmark, letters } = letterContext;

  // Get next letter sound in loop
  const nextSound = async () => {
    if (index !== letters.length) {
      await setIndex(index => index + 1);
      loopSound.src = `audio/${letters[index].name}.mp3`;
      loopSound.play();
    } else {
      loopSound.pause();
    }
  };

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

        <i
          className={bookmark}
          style={{ cursor: 'pointer' }}
          onClick={storeLetters}
        />

        <a href='/' style={{ cursor: 'pointer' }}>
          <i className='fas fa-stop float-right pt-1' />
        </a>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            loopSound.paused ? nextSound() : loopSound.pause();
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
