import React, { Component } from 'react';
import Event from './Event';

export default class Events extends Component {
  
  render() {
    const eventsMapped = this.props.events.map((result, index) => {
      const key = this.props.events.length - index;
      return <Event event={result} key={key} />
    });
        
    return <div className={'evts'}>
             {eventsMapped}
           </div>;
	}
}