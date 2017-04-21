import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <div className='Nav'>
    <ul>
      <li><Link to="/home" className="link">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
)

export default Nav;
