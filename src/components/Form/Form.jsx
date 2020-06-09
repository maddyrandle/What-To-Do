import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = {
        type: 'education',
        price: 0.5,
      }
  }

  updateType = e => this.setState({type: e.target.value});
  updatePrice = e => this.setState({[e.target.name]: e.target.value})
  getAnotherIdea = e => this.props.getNewActivity(
    this.state.type,
    this.state.price,
  );

  render() {
    return (
      <section className="form">
        <section className="flex">
          <label htmlFor="select-type">Type</label>
          <select id="select-type" name="type" onChange={this.updateType}>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>
          <label>Max. Budget</label>
          <input
            className="select-type"
            name="price"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={ this.state.price }
            onChange={ this.updatePrice }
          />
          <div className="budget-range">
            <p>Cheap</p>
            <p>Expensive</p>
          </div>
        </section>
        <section className="flex">
          <button onClick={this.getAnotherIdea}>Give me another idea</button>
        </section>
      </section>
    )
  }
}

export default Form;
