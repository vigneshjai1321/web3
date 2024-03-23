import './academic.css';
import { Link } from 'react-router-dom';
import menua from '../../assets/images/menua.gif';

const Academic = () => {
  const ulStyle = {
    backgroundImage: `url(${menua})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '10px', 
  };
  
  return (
    <div className='academic'>
      <div className='container'>
        <h4>Aboutus</h4>
        <ul style={ulStyle}>
          <Link to='/programstructure' className='aboutlink'><li>Program Structure</li></Link>
          <Link to='/curriculumandelectives' className='aboutlink'><li>Curriculum &amp; Electives</li></Link>
          <Link to='/curriculamandadmin' className='aboutlink'><li>Curriculam &amp; Admin</li></Link>          
        </ul>
      </div>
    </div>
  );
}

export default Academic;
