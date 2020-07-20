import React from 'react';
import './section.css';

class Section extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='section'>
          <img className='section-thumbnail' src={this.props.src}/>
          <span className='service-name'>{this.props.name}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Section;