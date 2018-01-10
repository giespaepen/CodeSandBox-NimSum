import React from 'react';
import "./Coin.css";

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: props.selected };
  }

  render() { 
    return (
      <div className={this.className()} onClick={this.onClick}>
        <div className="coin__inner">
          <div className="coin__content">
            {this.props.text || ""}
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(next) {
    this.setState({
      selected: next.selected,
    })
  }

  onClick = () => {
    const selected = !this.state.selected;
    this.setState({selected});
    if(this.props.onClick) {
      this.props.onClick(selected);
    }
  }

  className() {
    return "coin " + (this.state.selected ? "coin--selected" : "");
  }
}

module.exports = Coin;