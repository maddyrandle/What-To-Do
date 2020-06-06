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
        userList: [],
      }
  }

  componentDidMount = (type, participants) => {
    fetch(`http://www.boredapi.com/api/activity/?type=${ type || "education" }&participants=${ participants || 1 }&minprice=0&maxprice=0.5`)
      .then(response => response.json())
      .then(activityData => this.setState({
        activity: activityData,
        type: activityData.type
      }))
      .catch(err => console.error(`There was an error: ${err}`));
  }

  updateUserList = () => {
    !this.state.userList.includes(this.state.activity) &&
      this.setState({userList: [...this.state.userList, this.state.activity]})
  }

  clearUserList = () => {
    this.setState({userList: []})
  }

  render() {
    return (
      <main className="app-container">
        <BrowserRouter>
          <Nav
            myList={this.state.myList}
          />
          <Route exact path='/'render={ () =>
            <Card
              activity={this.state}
              getNewActivity={this.componentDidMount}
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
