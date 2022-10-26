import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, className, onClickHandler } = this.props;
    return (
      <div className={className} onClickCapture={onClickHandler}>
        { value }
      </div>
    );
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Item;
