import React from 'react';
import Academic from '../Academic/Academic.jsx';
 

const CurriculumAdministration = () => {
  return (
    <div className="curriculumAndAdmin">
      <div className='container'>
        <Academic />
      </div>
      <div className="contentb">
        <h2>CURRICULUM ADMINISTRATION</h2>
        <div style={{ margin: '5px 8px' }}>
          <div style={{ float: 'left', margin: '0px 0px 5px 0px', width: '807px', textAlign: 'justify' }}>
            <p>The Syllabus prescribed by Anna University, is meticulously administered to the students in the Semester pattern.</p>
            <p>Full Time MBA programme consists of 4 Semesters in 2 Academic Years.</p>
            <p>The teaching faculty who has rich corporate and teaching experience in their respective fields of specialization extends their experiences coinciding with the curriculums through interactive and case-based methodology of teaching.</p>
            <p>All the students are monitored and given one-to-one attention for overall development, shaping them to be refined management professionals pooled Business Ethics.</p>
            <p>All Students are taken for at least one Industrial Visit during each Semester and are encouraged to do mini projects. This helps them to fine-tune themselves to face the final term project work at their 4th Semester.</p>
            <p><strong>Attendance:</strong> Students who have secured at least 85 % of attendance in a Semester or who have obtained condonation of shortage of attendance will be eligible to appear for the examination of that Semester. Shortage of attendance up to 10% may be condoned by the competent authority.</p>
            <p><strong>University Examinations:</strong> University Examinations will be held at the end of each Semester for duration of 3 hours for each subject.</p>
            <strong>Internal Assessment: 40 Marks</strong><br />
            <strong>External Assessment: 60 Marks</strong>
            <p>As part of Internal Assessment, there will be Mid-Semester Examination and Pre Semester Examination. Apart from these two Examinations, there will be Unit Tests for all their papers.</p>
            <p>The absentees will have to take up retest.</p>
            <strong>Discipline</strong>
            <p>It accounts for submission of assignment on time, class participation, attendance, disciplined behavior, dressing, smartness etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumAdministration;
