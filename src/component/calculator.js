/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((prevState) => ({
      prevState, ...calculate(prevState, event.target.textContent),
    }));
  };
  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="display-section">
        <p className="display-value">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </p>
      </div>
      <button type="button" onClick={handleClick}>
        AC
      </button>
      <button type="button" onClick={handleClick}>
        +/-
      </button>
      <button type="button" onClick={handleClick}>
        %
      </button>
      <button type="button" onClick={handleClick} className="operator">
        ÷
      </button>
      <button type="button" onClick={handleClick}>
        7
      </button>
      <button type="button" onClick={handleClick}>
        8
      </button>
      <button type="button" onClick={handleClick}>
        9
      </button>
      <button type="button" onClick={handleClick} className="operator">
        x
      </button>
      <button type="button" onClick={handleClick}>
        4
      </button>
      <button type="button" onClick={handleClick}>
        5
      </button>
      <button type="button" onClick={handleClick}>
        6
      </button>
      <button type="button" onClick={handleClick} className="operator">
        -
      </button>
      <button type="button" onClick={handleClick}>
        1
      </button>
      <button type="button" onClick={handleClick}>
        2
      </button>
      <button type="button" onClick={handleClick}>
        3
      </button>
      <button type="button" onClick={handleClick} className="operator">
        +
      </button>
      <button type="button" onClick={handleClick} className="zero">
        0
      </button>
      <button type="button" onClick={handleClick}>
        .
      </button>
      <button type="button" onClick={handleClick} className="operator">
        =
      </button>
    </div>
  );
}
export default Calculator;
