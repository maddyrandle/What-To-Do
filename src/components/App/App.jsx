import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Loading from '../Loading/Loading';
import Nav from '../Nav/Nav';
// import { getApi } from "../apiCalls"

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section className="app-container">
        <h1>Solo Project</h1>
        <Route exact path='/landing' render={ () => <Landing /> }/>
        <Route exact path='/loading' render={ () => <Loading /> }/>
        <Route exact path='/nav' render={ () => <Nav /> }/>
      </section>
    );
  }
}

export default App;
