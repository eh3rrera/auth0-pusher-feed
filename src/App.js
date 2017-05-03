import React, { Component } from 'react';
import './App.css';

import Events from './Events';

import Pusher from 'pusher-js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: [], 
    };
	this.updateEvents = this.updateEvents.bind(this);
  }

  componentDidMount() {
    this.pusher = new Pusher('<INSERT_YOUR_PUSHER_APP_KEY>', {
	  cluster: '<INSERT_YOUR_PUSHER_APP_CLUSTER>',
      encrypted: true,
    });
    this.channel = this.pusher.subscribe('auth0');
	
    this.channel.bind('user-signedUp', this.updateEvents);
    this.channel.bind('user-loggedIn', this.updateEvents);
  }
  
  updateEvents(data) {
    this.setState({
      events: [ data, ...this.state.events ],
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Realtime Feed with Auth0 + Pusher</h2>
        </div>
        <Events events={this.state.events} />
      </div>
    );
  }
}

export default App;
