import React from 'react';
import SingleColorPicker from './SingleColorPicker';
//import { v4 as uuid } from 'uuid';
//npm install uuidv4 ==> create unique IDs


class RGBColorPicker extends React.Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  handleChange = (event) => {
      const {name, value} = event.target;
      this.setState(() => ({
          [name]: value
      }))
  }

  render() {
    return (
      <div>
        <SingleColorPicker color="r" value={this.state.rValue} onChange={this.handleChange} />
        <SingleColorPicker color="g" value={this.state.gValue} onChange={this.handleChange} />
        <SingleColorPicker color="b" value={this.state.bValue} onChange={this.handleChange} />
        <div>
          <div style={{ backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})` }}>''</div>
          <span>rbg({this.state.rValue},{this.state.gValue},{this.state.bValue})</span>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
