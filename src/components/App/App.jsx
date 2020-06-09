import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import MyList from '../MyList/MyList';
// import { getActivityData } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
      this.state = {
        activity: {},
        userList: [],
      }
  }

  componentDidMount = async (type, price) => {
    fetch(`http://www.boredapi.com/api/activity/?type=${ type || "education" }&minprice=0&maxprice=${ price || 0.5 }`)
      .then(response => response.json())
      .then(data => this.setState({
        activity: data,
        type: data.type
      }))

  }
  // componentDidMount = async (type, price) => {
  //   const activityData = await getActivityData(type, price)
  //   this.setState({
  //     activity: activityData,
  //     type: activityData.type
  //   })
  // }

  updateUserList = () => {
    !this.state.userList.includes(this.state.activity) &&
      this.setState({userList: [...this.state.userList, this.state.activity]})
  }

  clearUserList = () => this.setState({userList: []});

  render() {
    return (
      <main className="app-container">
        <BrowserRouter>
          <Nav />
          <Route exact path='/'render={ () =>
            <Card
              activity={this.state.activity}
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
