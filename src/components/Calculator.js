import React, { useState } from 'react';
import Item from './Items';
import calculate from './logic/calculate';

import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const clickHandler = (event) => {
    const text = event.target.textContent;
    const newState = calculate(state, text);
    setState({ ...newState });
  };

  const { total, next } = state;

  return (
    <div className="container">
      <Item value={next !== null ? next : total} className="header" />
      <Item value="AC" className="AC" onClickHandler={clickHandler} />
      <Item value="+/-" className="addSub" onClickHandler={clickHandler} />
      <Item value="%" className="percent" onClickHandler={clickHandler} />
      <Item value="÷" className="divide" onClickHandler={clickHandler} />
      <Item value="x" className="multiply" onClickHandler={clickHandler} />
      <Item value="-" className="minus" onClickHandler={clickHandler} />
      <Item value="+" className="plus" onClickHandler={clickHandler} />
      <Item value="=" className="equal" onClickHandler={clickHandler} />
      <Item value="1" className="one" onClickHandler={clickHandler} />
      <Item value="2" className="two" onClickHandler={clickHandler} />
      <Item value="3" className="three" onClickHandler={clickHandler} />
      <Item value="4" className="four" onClickHandler={clickHandler} />
      <Item value="5" className="five" onClickHandler={clickHandler} />
      <Item value="6" className="six" onClickHandler={clickHandler} />
      <Item value="7" className="seven" onClickHandler={clickHandler} />
      <Item value="8" className="eight" onClickHandler={clickHandler} />
      <Item value="9" className="nine" onClickHandler={clickHandler} />
      <Item value="0" className="zero" onClickHandler={clickHandler} />
      <Item value="." className="dot" onClickHandler={clickHandler} />
    </div>
  );
};

export default Calculator;
