import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div className="contentbfull">
      <div className="middle_con_content3">
        <div className="left_con2">
          <div className="grid_8">
            {/* Contact Form */}
            <form action='send_email.php' method='post' id="contact_form">
              <ul>
                <li className="clearfix">
                  <label htmlFor="name">Name</label>
                  <input type='text' name='name' id='name' />
                  <div className="clear"></div>
                  <p id='name_error' className='error'>Insert a Name</p>
                </li>
                <li className="clearfix">
                  <label htmlFor="phone">Phone</label>
                  <input type='text' name='phone' id='phone' />
                  <div className="clear"></div>
                  <p id='phone_error' className='error'>Enter a Phone Number</p>
                </li>
                <li className="clearfix">
                  <label htmlFor="email">Email Address</label>
                  <input type='text' name='email' id='email' />
                  <div className="clear"></div>
                  <p id='email_error' className='error'>Enter a valid email address</p>
                </li>
                <li className="clearfix">
                  <label htmlFor="qualification">Qualification</label>
                  <input type='text' name='qualification' id='qualification' />
                  <div className="clear"></div>
                  <p id='qualification_error' className='error'>Enter a Qualification</p>
                </li>
                <li className="clearfix">
                  <label htmlFor="subject">Subject</label>
                  <input type='text' name='subject' id='subject' />
                  <div className="clear"></div>
                  <p id='subject_error' className='error'>Enter a message subject</p>
                </li>
                <li className="clearfix">
                  <label htmlFor="message">Message</label>
                  <textarea name='message' id='message' rows="30" cols="30"></textarea>
                  <div className="clear"></div>
                  <p id='message_error' className='error'>Enter a message</p>
                </li>
                <li className="clearfix">
                  <p id='mail_success' className='success'>Thank you. I'll get back to you as soon as possible.</p>
                  <p id='mail_fail' className='error'>Sorry, an error has occurred. Please try again later.</p>
                  <div id="button">
                    <input type='submit' id='send_message' className="button" value='Submit' />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="right_con2">
          <div style={{ background: '#fff', width: '270px' }}>
            <h2>Contact Details</h2>
            <br />
            <div className="hr dotted clearfix">&nbsp;</div>
            <p><strong>Administrative Office,</strong></p>
            <br />
            <p><strong>Holy Angel School Of Business</strong></p>
            <br />
            <p>NH-45, Chennai-Tiruchi National Highways,</p>
            <br />
            <p>Siruvachur-621113,</p>
            <br />
            <p>Perambalur District.</p>
            <br />
            <p>Phone 1: +91 9442851066</p>
            <br />
            <p>Phone 2: +91 9443212267</p>
            <br />
            <p style={{ color: '#1461a3' }}>E-mail : info@hasb.co.in</p>
          </div>
          <div style={{ marginTop: '10px' }}>
            <h2>Located</h2>
            <br />
            <div className="hr dotted clearfix">&nbsp;</div>
            <iframe
              width="260"
              height="180"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Holy+Angel+School+Of+Business+perambalur&amp;aq=&amp;sll=21.125498,81.914063&amp;sspn=22.943364,43.286133&amp;ie=UTF8&amp;hq=Holy+Angel+School+Of+Business&amp;hnear=Perambalur,+Tamil+Nadu&amp;t=m&amp;cid=1302958256262390937&amp;ll=11.200462,78.870506&amp;spn=0.050518,0.051498&amp;z=13&amp;iwloc=A&amp;output=embed"
            ></iframe>
            <br />
            <a
              href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Holy+Angel+School+Of+Business+perambalur&amp;aq=&amp;sll=21.125498,81.914063&amp;sspn=22.943364,43.286133&amp;ie=UTF8&amp;hq=Holy+Angel+School+Of+Business&amp;hnear=Perambalur,+Tamil+Nadu&amp;t=m&amp;cid=1302958256262390937&amp;ll=11.200462,78.870506&amp;spn=0.050518,0.051498&amp;z=13&amp;iwloc=A"
              style={{ color: '#0000FF', textAlign: 'left' }}
              target="_blank"
            >
              View Larger Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
