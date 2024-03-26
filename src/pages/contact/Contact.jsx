import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    qualification: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="left_con">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
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
  );
};

export default Contact;
