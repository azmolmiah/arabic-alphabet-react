import React from 'react';
import LetterItem from './LetterItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Letters = ({ letters, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={letterStyle}>
        {letters.map(letter => {
          return <LetterItem key={uniqid()} letter={letter} />;
        })}
      </div>
    );
  }
};

Letters.propTypes = {
  letters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const letterStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridColumnGap: '0',
  maxWidth: '514px !important'
};

export default Letters;
