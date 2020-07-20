import React from 'react';
import './aboutus.css';

class AboutUs extends React.Component {
  render() {
    return(
      <React.Fragment>
        <section id='about'>
          <div className='about'>
            <h2 className='about-us-title'>Our Company</h2>
            <p className='about-text'>We connect the best proffessionals in the industry to provide you best service</p>
            <div className='about-inner-div'>
              <p>   sCanada VIP Group was founded on the idea of bringing together best proffessionals from various industries into on1 place. Our group determined to provide and maintain 
            We offer best service in: real estate, house renovation, healthcare, car services & rentals, immigration services etc.
            
              </p>   
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default AboutUs;