import React from 'react';

const LetterItem = ({ letter }) => {
  const images = `img/${letter.image}.png`;
  return (
    <img
      src={images}
      alt=''
      style={{ width: 'auto', height: '5.9rem', float: 'right' }}
    />
  );
};

export default LetterItem;
