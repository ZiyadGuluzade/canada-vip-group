import React from 'react';
import './App.css';
import MainPage from './components/mainpage/MainPage';
import Services from './components/services/Services';
import Membership from './components/membership/Membership';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import AboutUs from './components/aboutus/AboutUs';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Services />
      <AboutUs />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
