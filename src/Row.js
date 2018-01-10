import React from 'react';
import Coin from "./Coin";
import "./Row.css";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: props.count };
  }

  render(){
    return (<div className="row">
      <div className="row__caption">
        Selected: {this.state.selected}
      </div>
      <div className="row__coins">
        {this.countAsArray().map((x, i) => (
          <Coin onClick={this.onSelect} key={i} text={i+1} selected={i < this.state.selected} />
        ))}
      </div>
    </div>)
  }

  componentWillMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.selected, this.props.index);
    }
  }

  onSelect = (selected) => {
    const count = this.state.selected + (selected ? 1 : -1);
    this.setState({
      selected: count,
    });
    if (this.props.onChange) {
      this.props.onChange(count, this.props.index);
    }
  }

  onReset = () => {
    
  }

  countAsArray() {
    let a = [];
    while(a.length < this.props.count) {
      a.push(a.length);
    }
    return a;
  }
}

module.exports = Row;