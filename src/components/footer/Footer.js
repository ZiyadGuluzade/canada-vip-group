import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='footer'>
          <div className='footer-content'>
            Copyright 2020 <span>©</span> Canada VIP Group
          </div>
          <ul className='footer-list'>
            <li><a alt='terms and contidions'>Terms & Conditions</a></li>
            <li><a alt='privacy policy'>Privacy Policy</a></li>
            <li></li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;