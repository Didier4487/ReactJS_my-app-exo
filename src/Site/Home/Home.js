import React, {Component} from 'react';
import {Container, Image} from 'semantic-ui-react';

import img from '../Images/chat-transat.jpg';

class Home extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Image src={img} size="medium" shape='rounded' centered />
        <p>Welcome boys and girls !</p>
      </Container>
    )
  }
}
export default Home;
