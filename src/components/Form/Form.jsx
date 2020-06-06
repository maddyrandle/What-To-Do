import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
      this.state = {
        type: 'education',
        participants: 1,
      }
  }

  updateType = e => this.setState({type: e.target.value});
  updateParticipants = e => this.setState({[e.target.name]: e.target.value})

  getAnotherIdea = e => this.props.getNewActivity(
    this.state.type,
    this.state.participants,
  );

  render() {
    return (
      <section className="form">
        <label>Type</label>
        <select className="input" name="type" onChange={this.updateType}>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>

        <label>Participants</label>
        <input
          className="input"
          name="participants"
          placeholder="1"
          value={ this.state.participants }
          onChange={ this.updateParticipants }
        />

        <button className="another-btn" onClick={this.getAnotherIdea}>
          Give me another idea
        </button>
      </section>
    )
  }
}

export default Form;
