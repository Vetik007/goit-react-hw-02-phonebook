// import React from 'react';
import PropTypes from 'prop-types';
// import { Div, Label, Input } from './Filter.styled';

// Компонент фильтрации контактов
function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChangeFilter} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;