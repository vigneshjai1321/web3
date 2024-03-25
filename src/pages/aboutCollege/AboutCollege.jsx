import './aboutCollege.css';
import AboutUs from '../aboutUs/AboutUs';
import classroom from '../../assets/images/classroom.jpg';
import marq1 from'../../assets/images/marq1.gif';

const AboutCollege = () => {
  return (
    <div className='aboutcollege'>
      <div className='aboutusCom'>
        <AboutUs />
      </div>
      <div className="contentb">
        <h2>About College</h2>
        <div style={{ margin: '5px 8px' }}>
          <div>
            <img src={classroom} alt="" width="242" height="202" style={{ border: '2px solid #06C' }} />
            <div style={{ width: '545px', float: 'right', textAlign: 'justify' }}>
              <p>
                <strong>Holy Angels School of Business (HASB)</strong> Perambalur was launched with a mission to facilitate the best quality management education and placements to aspiring students. We also ensure that our stakeholders - students, parents, faculty, and recruiters are delighted to the maximum. The Business School offers UGC Recognized MBA Degree leading to the best placements tagged with future-ready academic credentials. At HASB, we are more focused on helping you discover various facets of yours by placing a mirror in front of you and thus extract maximum potential by way of self-realizing.
              </p>
              <p>
                The College is located at Siruvachur at a distance of about 5 km from Perambalur on the Chennai – Trichy National Highway. It is easily reached from Perambalur by bus proceeding to Siruvachur. The College is very near from Siruvachur Bus Stand.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '5px', textAlign: 'justify' }}>
            <h3>VISION:-</h3>
            <img src={marq1} style={{ border: 'none' }} />To make our B’ school one of the best Business Schools that will have the state-of-art facilities for providing excellent education and academic environment in every aspect of Management and Business Education.<br /><br />
            <img src={marq1} style={{ border: 'none' }} />To transform the learners into achievers with the right attitudes pooled with Business Ethics, Managerial Competence, and a spirit of entrepreneurship.
            <h3>MISSION:-</h3>
            <img src={marq1} style={{ border: 'none' }} />To develop the resources and infrastructure not only to meet the statutory requirements but also to go beyond the boundary and make the Institution a preferred destination for learners by providing them a conducive environment for the teaching-learning process.<br /><br />
            <img src={marq1} style={{ border: 'none' }} />To equip the students to face challenges and stringent demands of today’s competitive environment.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCollege;
