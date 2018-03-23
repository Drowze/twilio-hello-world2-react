import React, { Component } from 'react'

class UserInformation extends Component {
  render() {
    const { user, className } = this.props;
    return(
      <div className={className || ''}>
        <span className="user-name">{user.name}</span>
        <a href={`tel:${user.country_code}-${user.phone_number}`}>
          <span
            style={{paddingLeft: '1em'}}
            className="user-countrycode"
          >
            {user.country_code}
          </span>
          <span className="user-phonenumber">{user.phone_number}</span>
        </a>
      </div>
    )
  }
}

export default UserInformation;
