import './aboutUs.css';
import { Link } from 'react-router-dom';
import menua from '../../assets/images/menua.gif';

const AboutUs = () => {
  const ulStyle = {
    backgroundImage: `url(${menua})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '10px', 
  };

  return (
    <div className='aboutUs'>
      <div className='aboutLeftSec'>
        <h4>Aboutus</h4>
        <ul style={ulStyle}>
          <Link to='/chairman' className='aboutlink'><li>Chairman</li></Link>
          <Link to='/aboutcollege' className='aboutlink'><li>About College</li></Link>
          <Link to='/trustes' className='aboutlink'><li>Trustes</li></Link>
          <Link to='/governingcouncil' className='aboutlink'><li>Governing Council</li></Link>
          <Link to='/advisor' className='aboutlink'><li>Advisor</li></Link>
          <Link to='/director' className='aboutlink'><li>Director</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
