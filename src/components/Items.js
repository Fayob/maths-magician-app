import React from 'react';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { value, className, onClickHandler } = this.props;
    return (
      <div className={className} onClickCapture={onClickHandler}>
        { value }
      </div>
    );
  }
}

export default Item;
