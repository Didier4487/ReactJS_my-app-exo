import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  }

  render() {
    return (
      <div>
        <Menu stackable tabular color="teal" size='large'>
          {/* augmented component menu.item as='Link' */}
          <Menu.Item as={Link} to='/home' name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to='/galery' name='galery' active={this.state.activeItem === 'galery'} onClick={this.handleItemClick}>
            Galery
          </Menu.Item>
          <Menu.Item as={Link} to='/about' name='about' active={this.state.activeItem === 'about'} onClick={this.handleItemClick}>
            About
          </Menu.Item>
          <Menu.Item as={Link} to='/evts' name='evts' active={this.state.activeItem === 'evts'} onClick={this.handleItemClick}>
            Evts
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default Nav;
