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
            
            <div className='services'>
              <div className='service'>
                <Section name='Immigration' src={require('../../images/icons/immigrationn.svg')} /></div>

              <div className='service'>
                <Section name='Real Estate' src={require('../../images/icons/real_estate.svg')}/></div>

              <div className='service'>
                <Section name='Home Services' src={require('../../images/icons/home_services.svg')} /></div>

              <div className='service'>
                <Section src={require('../../images/icons/medical.svg')} name='Healthcare' /></div>

              <div className='service'><Section name='Car Services' src={require('../../images/icons/caaar.svg')}/>
              </div>
              <div className='service'><Section name='Beauty' src={require('../../images/icons/beauty.svg')}/></div>
            </div>
            <a src='#' className='full-list'>See full list of services</a>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Services;