import React from 'react';
import './contact.css';

class Contact extends React.Component {
  render() {
    return(
      <React.Fragment>
        <section id='contact'>
          <h2 className='contacts-title'>Contact Information</h2>
          <p className='contact-info'>Please contact us for question and additionl information</p>
          <p className='contact-info'><span className='addresses'><i class="fas fa-search-location"></i>
          </span> 7181 Yonge Street, Thornhill, ON /Shops on Yonge,L3T 0C7</p>
              <p><span className='addresses'><i class="fas fa-phone"></i> 416 731 42 42</span>   <span className='addresses'><i class="far fa-envelope"></i> info@canadavipgroup.com</span></p>
              {/* AIzaSyAKt6PhyNV0hiP0aNIfxQmuRFjloDZpYgw */}
          <div className='contacts'>
            <div className='address'>
            <iframe
              width="500"
              height="450"
              frameborder="0" style={{border: '1px'}}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAKt6PhyNV0hiP0aNIfxQmuRFjloDZpYgw 
              &q=Shops+on+Yonge,Toronto+ON" allowFullScreen>
            </iframe>
            
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