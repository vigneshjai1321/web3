import React from 'react';

import { Link } from 'react-router-dom';
import './footer.css';


const Footer = () => {
  return (
    <div id="footer">
      <p id="legal">Copyright &copy; 2022. All Rights Reserved <br /> Designed by <a href="#">IdealTechSolutions</a></p>
      <p id="links">
       <Link to="/">Home</Link> | <a href="#">Contact</a> | <Link to="/aboutcollege">About</Link>| <a href="#">Staff Login</a>
      </p>
    </div>
  );
}

export default Footer;