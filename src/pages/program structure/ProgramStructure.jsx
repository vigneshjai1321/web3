import Academic from '../Academic/Academic.jsx';
import './programstructure.css';
import classroom from '../../assets/images/classroom.jpg'

const ProgramStructure = () => {
  return (
    <div className="programStructure">
      <div className='container'>
        <Academic />
      </div>
        <div className="contentb">
          <h2>PROGRAM STRUCTURE</h2>
          <div style={{ margin: '5px 8px 5px 8px' }}>
            <h1>A HIGHLY INNOVATIVE APPROACH</h1>
            <div>
              <img
                src={classroom}
                alt=""
                width="242"
                height="202"
                style={{ border: '2px solid #06C',  }}
              />
              <div style={{ width: 545, height: 250, float: 'right', textAlign: 'justify' }}>
                <p>
                  In the globalised business world leadership is the most important tool to steer a
                  company. However it is not something you can learn solely from text books. MBA @
                  Holy Angels School of Business therefore focuses on leadership and exposure by applying
                  an integrated approach.
                
                  The University curriculum prepares you best. Additionally we sharpen not only your
                  analytical but also interpersonal skills in the areas such as communication, team
                  building, project management and negotiation. Moreover case studies, project work and
                  high profile guest speakers ensure strong input from practice.
                
                  Holy Angels School of Business program design is to prepare effective and responsible
                  business leaders for the challenges of the 21st century.
                </p>
              </div>
            </div>
            <div style={{ float: 'left', margin: '0px 0px 5px 0px', width: 807, textAlign: 'justify' }}>
              <h3>Master of Business Administration (M.B.A)</h3>
              <p>
                Holy Angels School of Business offers a full time, Two Years, Programme in M.B.A (Master
                of Business Administration) with specializations in MARKETING, HR, FINANCE, SYSTEMS AND
                OPERATIONS.
              </p>
              <p>
                The programme is affiliated to Anna University and approved by AICTE - New Delhi The
                programme will be a semester model with Two Semester per year. Students need to study 27
                Papers during their M.B.A. besides a project work in their fourth Semester.
              </p>
              <p>
                Third Semester will comprise of two core papers along with the options of functional
                specializations. Students will have an option of Dual Specializations stream.
              </p>
              <p>During their Fourth Semester all students need to do a mandatory Project.</p>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default ProgramStructure;
