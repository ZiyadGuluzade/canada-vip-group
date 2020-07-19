import React from 'react';
import './section.css';

class Section extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='section'>
          <span className='service-name'>{this.props.name}</span>
          <img className='section-thumbnail' src={this.props.src}/>
          <a src='#' className='section-link'>Learn More</a>
        </div>
      </React.Fragment>
    )
  }
}

export default Section;