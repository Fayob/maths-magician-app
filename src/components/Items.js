import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Item extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { value, className } = this.props;
    return (
      <div className={className}>
        { value }
      </div>
    );
  }
}

export default Item;
