import React from 'react';
import './contact.css';

class Contact extends React.Component {
  render() {
    return(
      <React.Fragment>
        <section id='contact'>
          <h2 className='contacts-title'>Contact Us</h2>
          <div className='contacts'>
            <div className='address'>
              <p className=''><span className='addresses'>Address:</span> 7181 Yonge Street, Thornhill, ON /Shops on Yonge</p>
              <p><span className='addresses'>Postal Code:</span> L3T 0C7</p>
              <p><span className='addresses'>Phone:</span> 416 731 42 42</p>
              <p><span className='addresses'>Email:</span> info@canadavipgroup.com</p>
            </div>
            <div className='email-form'>

            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Contact;