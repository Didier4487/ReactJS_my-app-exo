import React, {Component} from 'react';
import {Image, Segment, Header} from 'semantic-ui-react';

import img from '../Images/piscine.jpg'

class Head extends Component {
  render() {
    return(
      <div>
        <Image src={img} />
        <Segment basic textAlign='center'>
          <Header as="h2" color="grey">Mon super blog de vacances</Header>
        </Segment>
      </div>
    )
  }
}

export default Head;
