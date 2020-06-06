import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import MyList from '../MyList/MyList';

class App extends Component {
  constructor() {
    super();
      this.state = {
        activity: {},
        type: 'education',
        userList: [],
        myList: false
      }
  }

  componentDidMount = () => {
    fetch(`http://www.boredapi.com/api/activity/?type=${this.state.type}&participants=1&minprice=0&maxprice=0.5`)
      .then(response => response.json())
      .then(activityData => this.setState({
        activity: activityData,
        type: activityData.type
      }))
      .catch(err => console.error(`There was an error: ${err}`));
  }

  updateActivityType = type => this.setState({type: type});

  updateUserList = () => {
    !this.state.userList.includes(this.state.activity) &&
      this.setState({userList: [...this.state.userList, this.state.activity]})
  }

  clearUserList = () => {
    this.setState({userList: []})
  }

  handleMyList = (id) => {
    if (id === 'mylist') {
      this.setState({myList: true})
    } else {
      this.setState({myList: false})
    }
  }

  render() {
    return (
      <main className="app-container">
        <BrowserRouter>
          <Nav
            myList={this.state.myList}
            handleMyList={this.handleMyList}
          />
          <Route exact path='/'render={ () =>
            <Card
              activity={this.state}
              getNewActivity={this.componentDidMount}
              updateActivityType={this.updateActivityType}
              updateUserList={this.updateUserList}
            />
          } />

          <Route exact path='/mylist'render={ () =>
            <MyList
              myList={this.state.myList}
              userList={this.state.userList}
              clearUserList={this.clearUserList}
            />
          } />
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
