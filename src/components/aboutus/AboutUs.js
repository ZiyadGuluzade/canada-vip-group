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
              <img className='about-pic' src={require('../../images/about_1.jpg')}/>
              <img className='about-pic' src={require('../../images/about_2.jpg')}/>
              <img className='about-pic' src={require('../../images/about_3.jpg')}/>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default AboutUs;