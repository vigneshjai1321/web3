import AboutUs from '../aboutUs/AboutUs';
import './chairman.css'; // Make sure chairman.css exists and contains necessary styles
import chairman from '../../assets/images/Chairmanimg.jpg'; // Assuming this is the correct path to your image

const Chairman = () => {
  return (
    <div className='chairman'>
      <div className='aboutusCom'>
        <AboutUs />
      </div>
      <div className="contentb">
        <h2>Chairman Message</h2>
        <div style={{ margin: '5px 8px' }}> {/* Updated style attribute */}
          <div>
            <p><span style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#FF6600', fontStretch: 'expanded' }}><strong>Greetings!</strong></span></p>
            <p align="justify">I welcome you wholeheartedly to Holy Angels School of Business (HASB).<img src={chairman} width="100" height="120" style={{ marginLeft: '10px' }} align="right" alt="Chairman" /></p>
            <p align="justify">HASB was started with the view of imparting quality education in Business and Management to Students in general, and rural Students, in particular. The guiding philosophy of this School has always been creative learning, innovation, bridging the gap between Industry and Institute. At HASB, we give our students the exposure required to empower them with the newest trends in Management.</p>
            <p align="justify">We offer excellent exposure to our students by way of a strong Industry-Institute interface and Guest Lectures by industry Professionals and high-profile leaders at regular intervals.</p>
            <p align="justify">I wish my students all the best for their future endeavors.</p>
            <p align="right"><strong>Dr. D. Selvaraj<br />Chairman</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chairman;
