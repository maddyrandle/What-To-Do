import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';


class App extends Component {
  constructor() {
    super();
    this.state = {
      activity: {},
      type: 'education',
      userList: [],
    }
  }

  componentDidMount = () => {
    fetch(`http://www.boredapi.com/api/activity/?type=${this.state.type}&participants=1&minprice=0&maxprice=0.5`)
      .then(response => response.json())
      .then(activityData => this.setState(
        {
          activity: activityData,
          type: activityData.type
        }
      ))
      .catch(err => console.error(`There was an error: ${err}`));
  }

  updateActivityType = (type) => {
    this.setState({type: type})
  }

  render() {
    return (
      <main className="app-container">
        <Nav />
        <Card
          activity={this.state}
          updateActivityType={this.updateActivityType}
          getNewActivity={this.componentDidMount}
        />
      </main>
    )
  }
}

export default App;


// <Route exact path='/Favorites' render={ () => <Favorites /> }/>
// <Route exact path='/loading' render={ () => <Loading /> }/>
