import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../index';
import UserInformation from './UserInformation';
import UserForm from './UserForm';

class UserList extends Component {
  state = {users: [], finished: false}

  componentWillMount = () => this.getUsers()

  getUsers() {
    axios.get(`${API_URL}/users`)
      .then(response => this.setState({
        users: response.data.users,
        finished: true,
      }))
      .catch(error => console.log(error))
  }

  submitUser = (event) => (
    axios.post(`${API_URL}/users`, {
      name: event.target.name.value,
      country_code: event.target.country_code.value,
      phone_number: event.target.phone_number.value,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  )

  usersElement() {
    const {users} = this.state;
    if(users.length === 0) {
      return <div className="no-users">'Nao tem usuarios :('</div>
    }
    return (users.map((user, index) => (
      <UserInformation
        className='user-details'
        key={user.id}
        user={user}
      /> 
    )))
  }

  render() {
    return (
      <div>
        {this.state.finished ? this.usersElement() : 'Loading...'}
        <UserForm submitUser={this.submitUser} />
      </div>
    );
  }
}

export default UserList;
