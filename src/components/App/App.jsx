import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getActivityData } from '../../apiCalls';
import Nav from '../Nav/Nav';
import Activities from '../Activities/Activities';
import Form from '../Form/Form';
import MyList from '../MyList/MyList';

class App extends Component {
  constructor() {
    super();
      this.state = {
        activity: {},
        userList: []
      }
  }

  componentDidMount = async (type, price) => {
    const activityData = await getActivityData(type, price)
    this.setState({
      activity: activityData,
      type: activityData.type
    })
  }

  updateUserList = (activity) => {
    !this.state.userList.includes(activity) &&
      this.setState({userList: [...this.state.userList, activity]})
  }

  removeFromUserList = id => {
    this.state.userList.forEach((activity, i) => activity.key === id
      && this.state.userList.splice(i, 1));

    this.setState({userList: this.state.userList})
  }

  clearUserList = () => this.setState({userList: []});

  render() {
    return (
      <main className="app-container">
        <BrowserRouter>
          <Nav />
          <Route exact path='/' render={ () =>
            <section data-testid="card-element" className="card">
              <Activities
                activity={this.state.activity}
                updateUserList={this.updateUserList}
              />
              <Form getNewActivity={this.componentDidMount} />
            </section>
          } />

          <Route exact path='/mylist' render={ () =>
            <MyList
              userList={this.state.userList}
              clearUserList={this.clearUserList}
              removeFromUserList={this.removeFromUserList}
            />
          } />
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
