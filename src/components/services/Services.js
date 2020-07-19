import React from 'react';
import './services.css';
import Section from '../section/Section';

class Services extends React.Component {
  render() {
    return(
      <React.Fragment>
        <section id='services'>
          <div className='outer-services-div'> 
            <h2 className='services-title'>Our Best Services</h2>
            <hr></hr>
            <div className='services'>
              <div className='service'>
                <Section name='Immigration' src={require('../../images/icons/passport.svg')} /></div>

              <div className='service'>
                <Section name='Real Estate' src={require('../../images/icons/building.svg')}/></div>

              <div className='service'>
                <Section name='Home Services' src={require('../../images/icons/house_keeping.svg')} /></div>

              <div className='service'>
                <Section src={require('../../images/icons/healthcare.svg')} name='Health Services' /></div>

              <div className='service'><Section name='Car Services' src={require('../../images/icons/car3.svg')}/>
              </div>
              <div className='service'><Section name='Beauty' src={require('../../images/icons/barber.svg')}/></div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Services;