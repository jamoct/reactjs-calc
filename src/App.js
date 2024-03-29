import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  state = {
    result: ""
  }

  handleInput = e => {
    this.setState({result: e.target.value});
  }

  handleClick = button => {

    if (button === "CLEAR") {
      this.setState({result: ""});
    }

    if (button === "DEL") {
      let result = this.state.result.toString();
      let deleted = result.slice(0, -1);
      this.setState({result: deleted});
    }

    if (button === "EQUALS") {
      try {
      let result = eval(this.state.result);
      this.setState({result: result});
      }
      catch (e) {
        this.setState({result: 'Error'});
      }
    }
  
    else if (button !== "CLEAR" && button !== "DEL") {
      this.setState({result: this.state.result + button});
    }

  }

  calculate = (event) => {
    event.preventDefault();
    try {
      let result = eval(this.state.result);
      this.setState({result: result});
    }
    catch (e) {
      this.setState({result: 'Error'});
    }
  }

  render () {

    return (
      <div>
        <div className="calc-body">
        <form onSubmit={this.calculate}>
          <input
            name="result"
            value={this.state.result}
            onChange={this.handleInput}
            className="result"
            autofocus="true"
          />
          </form>
          <div className="keypad">
            <button onClick={() => this.handleClick('CLEAR')}>C</button>
            <button onClick={() => this.handleClick('0')}>0</button>
            <button onClick={() => this.handleClick('DEL')}>DEL</button>
            <button onClick={() => this.handleClick('/')}>/</button>
          </div>
          <div className="keypad">
            <button onClick={() => this.handleClick('7')}>7</button>
            <button onClick={() => this.handleClick('8')}>8</button>
            <button onClick={() => this.handleClick('9')}>9</button>
            <button onClick={() => this.handleClick('*')}>X</button>
          </div>
          <div className="keypad">
            <button onClick={() => this.handleClick('4')}>4</button>
            <button onClick={() => this.handleClick('5')}>5</button>
            <button onClick={() => this.handleClick('6')}>6</button>
            <button onClick={() => this.handleClick('+')}>+</button>
          </div>
          <div className="keypad">
            <button onClick={() => this.handleClick('1')}>1</button>
            <button onClick={() => this.handleClick('2')}>2</button>
            <button onClick={() => this.handleClick('3')}>3</button>
            <button onClick={() => this.handleClick('-')}>-</button>
          </div>
          <div className="keypad-equals" onClick={() => this.handleClick('EQUALS')} onKeyPress={this.handleKeyPress}>
            <button>=</button>
          </div>
        </div>
      </div>
    )
  }
}
