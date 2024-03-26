import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

  

const Nav = () => {


  return (
    <div className='nav'>
        <ul className='navWrapper'>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li >
              <a href="#">About Us</a>

              <div className='dropdown' >
                <Link to='/chairman'>Chairman</Link>
                <Link to='/governingcouncil'>Governing Council</Link>
                <Link to='/aboutcollege'>About College</Link>
                <Link to='/director'>Director</Link>
                <Link to='/trustes'>Trustes</Link>
                <Link to='/advisor'>Advisor</Link>
              </div>
            </li>

            <li >
              <a href="#">Academic</a>

              <div className='dropdown'>
                <Link to='/programstructure' id='ddLink'>Program Structure</Link>
                <Link to='/curriculumandelectives' id='ddLink'>Curriculum &amp; Electives</Link>
                <Link to='/curriculamandadmin' id='ddLink'>Curriculam &amp; Admin</Link>
              </div>
              
            </li>

            <li>
              <Link to="/guestlecture">Guest Lectures</Link>
            
            </li>

            <li>
             <Link to="admission">Admission</Link>                             
            </li>

            <li>
              <Link to="/facilities">Facilities</Link>
              
            </li>

            <li>
              <a href="#">Gallery</a>
            </li>

            <li >
            <Link to="hasbmedia">Hasbmedia</Link> 
            </li>

            <li >
            <Link to="contact">Contact</Link> 
            </li>
        </ul>
    </div>
  )
}

export default Nav