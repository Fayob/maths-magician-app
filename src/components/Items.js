import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ value, className, onClickHandler }) => (
  <div className={className} onClickCapture={onClickHandler}>
    { value }
  </div>
);

Item.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Item;
