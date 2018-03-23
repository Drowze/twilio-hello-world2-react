import React, { Component } from 'react'

class UserForm extends Component {
  handleSubmitUser(event) {
    event.preventDefault();
    this.props.submitUser(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitUser.bind(this)}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="country_code" placeholder="+55" />
        <input type="tel" name="phone_number" placeholder="(__) 0000-0000" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default UserForm;
