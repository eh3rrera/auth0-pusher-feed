import React, { Component } from 'react';

export default class Event extends Component {

  render() {
    const {email, updated_at, country} = this.props.event;
    const event = this.props.event.app_metadata.signedUp ? 'Log In:' : 'Sign Up:';
    return (
        <li className={'evt'}>
          <div className={'evt-name'}>{event}</div>
          <div className={'evt-email'}>{email}</div>
          <div className={'evt-date'}>{updated_at}</div>
          <div className={'evt-from'}>From {country}</div>
        </li>
    );
  }
}