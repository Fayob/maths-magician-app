import React, { Component } from 'react';
import Item from './Items';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <Item value="0" className="header" />
        <Item value="AC" className="AC" />
        <Item value="+/-" className="addSub" />
        <Item value="%" className="percent" />
        <Item value="/" className="divide" />
        <Item value="x" className="multiply" />
        <Item value="-" className="minus" />
        <Item value="+" className="plus" />
        <Item value="=" className="equal" />
        <Item value="1" className="one" />
        <Item value="2" className="two" />
        <Item value="3" className="three" />
        <Item value="4" className="four" />
        <Item value="5" className="five" />
        <Item value="6" className="six" />
        <Item value="7" className="seven" />
        <Item value="8" className="eight" />
        <Item value="9" className="nine" />
        <Item value="0" className="zero" />
        <Item value="." className="dot" />
      </div>
    );
  }
}

export default Calculator;
