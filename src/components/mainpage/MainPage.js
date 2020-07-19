import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './mainpage.css';

class MainPage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <div className='main-page'>
          <div className='welcome'>
            <span className='company-name'>
              Canada VIP Group  
            </span>
            <p className='main-page-quote'>We help to grow <br/>your business</p>
            <br/>
            <a className='services-link' href='#services'>Our Services</a>
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default MainPage;