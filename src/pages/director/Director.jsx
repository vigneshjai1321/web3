import AboutUs from '../aboutUs/AboutUs';
import './director.css';
import director from '../../assets/images/Director.jpg'
const Director = () => {
  return (
    <div className='director'>
                <div className='aboutusCom'>
            <AboutUs />
          </div>
          <div className="contentb">
    <h2>DIRECTOR MESSAGE</h2>
    <div style={{ margin: "5px 8px 5px 8px" }}>
        <div>
            <p>
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#FF6600", fontStretch: "expanded" }}>
                    <strong>Greetings!</strong>
                </span>
            </p>
            <p align="justify">
                Welcome to the Holy Angels School of Business (HASB)!
                <img src={director} width="100" height="120" style={{ marginLeft: "10px" }} align="right" name="Chairman" />
            </p>
            <p align="justify">
                HASB, a standalone B-School and the first of its kind in the district of Perambalur.
                This B-School is a brainchild and a master project of Dr. D. Selvaraj, a Philanthropist and Chairman-cum-Managing Trustee of Holy Angels Trust.
            </p>
            <p align="justify">
                HASB is a unique Educational Institution imparting quality education in Management and Business to students from all sections of the Society.
                HASB is blessed with a highly qualified, diverse, and experienced faculty team and campus with all necessary infrastructures.
                HASB encourages student interaction with industry professionals and high-profile leaders.
            </p>
            <p align="justify">
                HASB believes in encouraging students to accept the challenges in learning and converting them into rewarding experiences.
            </p>
            <p align="justify">
                In total, HASB is seriously committed to shaping students’ career to the best of the requirements of the corporate world.
            </p>
            <p align="right">
                <strong>Dr. M. Ganesh<br />Director</strong>
            </p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Director