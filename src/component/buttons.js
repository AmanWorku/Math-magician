import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick}>AC</button>
        <button type="button" onClick={this.handleClick}>+/-</button>
        <button type="button" onClick={this.handleClick}>%</button>
        <button type="button" onClick={this.handleClick} className="operator">÷</button>

        <button type="button" onClick={this.handleClick}>7</button>
        <button type="button" onClick={this.handleClick}>8</button>
        <button type="button" onClick={this.handleClick}>9</button>
        <button type="button" onClick={this.handleClick} className="operator">x</button>

        <button type="button" onClick={this.handleClick}>4</button>
        <button type="button" onClick={this.handleClick}>5</button>
        <button type="button" onClick={this.handleClick}>6</button>
        <button type="button" onClick={this.handleClick} className="operator">-</button>

        <button type="button" onClick={this.handleClick}>1</button>
        <button type="button" onClick={this.handleClick}>2</button>
        <button type="button" onClick={this.handleClick}>3</button>
        <button type="button" onClick={this.handleClick} className="operator">+</button>

        <button type="button" onClick={this.handleClick} className="zero">0</button>
        <button type="button" onClick={this.handleClick}>.</button>
        <button type="button" onClick={this.handleClick} className="operator">=</button>
      </>
    );
  }
}
