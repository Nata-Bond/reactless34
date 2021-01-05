import React, { Component } from "react";
import CounterButs from "./CounterButs";

export default class Counter extends Component {
  state = {
    value: this.props.initialvalue,
  };

  handleIncrement = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState, props) => {
      return { value: prevState.value - props.step };
    });
  };

  render() {
    return (
      <div>
        <CounterButs
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <span>{this.state.value}</span>
      </div>
    );
  }
}
