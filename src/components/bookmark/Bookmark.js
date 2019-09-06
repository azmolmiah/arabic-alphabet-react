import React, { useContext } from 'react';
import LetterContext from '../../context/letters/letterContext';

const Bookmark = () => {
  const letterContext = useContext(LetterContext);

  const { bookmark, current, removeBookmark } = letterContext;

  // Store Letters to storage - put this in navbar header does not have dispatch
  const storeLetters = async e => {
    e.persist();
    const pageNumber =
      e.nativeEvent.path[3].children[2].children[0].children[0].children[0]
        .children[1].value;

    await localStorage.setItem('pageNumber', JSON.stringify(current));

    removeBookmark(parseInt(pageNumber), current);
  };

  return (
    <i
      className={bookmark}
      style={{ cursor: 'pointer' }}
      onClick={storeLetters}
    />
  );
};

export default Bookmark;
