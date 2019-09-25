import React, { useContext } from 'react';
import Bookmark from '../bookmark/Bookmark';
import SoundControl from '../soundcontrol/SoundControl';

import LetterContext from '../../context/letters/letterContext';

const NavbarHeader = () => {
  const letterContext = useContext(LetterContext);

  return (
    <div className='bg-dark py-3'>
      <div className='container'>
        <div className='float-left'>ReactArabicAlphabet</div>

        <Bookmark />

        <SoundControl />

        <div
          style={{ cursor: 'pointer' }}
          className='float-right pr-2'
          onClick={letterContext.getStorageLetters}
        >
          getBookmark
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
