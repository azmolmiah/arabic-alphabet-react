import React from 'react';

const Select = ({ optionOnChange }) => {
  let options = [];
  for (let i = 0; i <= 26; i++) {
    options.push(i);
  }
  return (
    <select
      className='form-control mx-auto'
      style={{ width: '70px' }}
      onChange={optionOnChange}
    >
      {options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
