import React from 'react';
import './navbar.css';
// import {ReactComponent as Logo } from '../../images/maple_leaf'

class Navbar extends React.Component {
  render() {
    return(
      <React.Fragment>
        <nav className='navbar'>
          <div className='logo'>
            <a className='logo-link'href='#main'>CVP</a>
          </div>
          <div className='nav-links'>
            <ul>
            <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#contact'>Contact Us</a></li>
              <li><a>Become a Member</a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
} 

export default Navbar;