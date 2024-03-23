import React from 'react';
import './admission.css'
import arq1 from '../../assets/images/arq1.gif'

const Admission = () => {
  return (
    <div className="contentbfull">
      <h2>Admission</h2>
      <div style={{ margin: '5px 8px' }}>
        <div>
          <h3>The Programme</h3>
          <br />
          <p>
            <strong>Eligibility</strong>
            <br /><br />
            <p>A Pass in any recognized Bachelor’s Degree( in any discipline) of minimum 3 years duration with 10+2+3/4 years pattern (i.e. 10th Std + HSC + 3 Years or 4 Years Degree Programme) and obtained 50% (45% in case of candidate belonging to reserved category) at the qualifying Examination as per current AICTE norms.</p>
            <p>The candidate should have appeared for any of the leading Management examinations like MAT, CAT, TANCET, XAT or the like.</p>
            <br />
            <strong>The First Year</strong>
            <br /><br />
            During the first year of the study, the students are exposed to a broad perspective of the Managerial discipline. A basic industrial knowledge is also presented to the students during the two semesters of the first year.
            <br /><br />
            <strong>The Second Year</strong>
            <br /><br />
            With the foundation laid in the first year, the students select their electives during the second year. There is the provision of dual specialization. Special workshops and exercises would be conducted to help the students to identify their specialization that best suits them.
            <p>There are core papers of generic nature that are compulsory during the second year (Third Semester), along with their specialization papers. The following are the specializations offered:</p>
            <ul>
              <li><img src={arq1} alt="" /> Marketing</li>
              <li><img src={arq1} alt="" /> Finance</li>
              <li><img src={arq1} alt="" /> Operations</li>
              <li><img src={arq1} alt="" /> Human Resources</li>
              <li><img src={arq1} alt="" /> Systems</li>
            </ul>
            <p>During their Second Semester holidays, they are to do a mini-project, and, in fact, the same is the curtain raiser for their complete fourth-semester project.</p>
            <br />
          </p>
          <h3>Admission Procedure</h3>
          <br />
          <p>The Application forms are available from the Administrative Office starting from November onwards. Alternatively, it can be downloaded from the website.</p>
          <p>The Filled-in application form has to be sent to the following address:<br /><br /><strong>The Director</strong><br />
            <strong>Holy Angels School of Business</strong><br />
            <strong>Siruvachur 621 113</strong><br />
            <strong>Perambalur District.</strong><br />
            <strong>Mailto: director@hasb.co.in</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Admission;
