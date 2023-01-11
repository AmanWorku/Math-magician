/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const data = calculate(this.state, event.target.textContent);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
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
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
