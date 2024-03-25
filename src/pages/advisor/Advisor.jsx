import React from 'react';
import './advisor.css';
import AboutUs from '../aboutUs/AboutUs';

const Advisor = () => {
  return (
    <div className='advisor'>
      <div className='aboutusCom'>
        <AboutUs />
      </div>
      <div className="contentb">
        <h2>Advisor Message</h2>
        <div style={{ margin: "5px 8px 5px 8px" }}>
          <div><p>Update Soon</p></div>
        </div>
      </div>
    </div>
  );
}

export default Advisor;
