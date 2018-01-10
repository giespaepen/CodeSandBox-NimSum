import React from 'react';
import Row from "./Row";

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counts: [] };
  }

  render() {
    return (
      <div className="calculator">
        <Row count={1} index={0} onChange={this.onChange} />
        <Row count={3} index={1} onChange={this.onChange} />
        <Row count={5} index={2} onChange={this.onChange} />
        <Row count={7} index={3} onChange={this.onChange} />
        <div>
          <strong>Nim sum</strong>: {this.renderSum()} = {this.xor()}
          <br/><br/>
          <a href="#" onClick={this.reset}>Reset calculator</a>
        </div>
      </div>
    );
  }

  onChange = (count, index) => {
    const counts = this.state.counts;
    counts[index] = count;
    this.setState({
      counts,
    })
  };

  renderSum = () => {
    return this.state.counts.map((x, i) => <span>{x}{i < this.state.counts.length-1 ?" + ": " "}</span>);
  }

  xor = () => {
    return this.state.counts.reduce((p, c) => p^c, 0);
  }

  reset = () => {
    window.location.reload();
  }
}

module.exports = Calculator;