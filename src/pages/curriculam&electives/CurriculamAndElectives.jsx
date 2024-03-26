import React from 'react';
import Academic from '../Academic/Academic.jsx';

const CurriculumAndElectives = () => {
  return (
    <div className="curriculumAndAdmin">      
      <div className='container'>
        <Academic />
      </div>
      <div className="contentb">
        <h2>Curriculum & Electives</h2>
        <div style={{ margin: '5px 8px' }}>
          <div style={{ float: 'left', margin: '0px 0px 5px 0px', width: '807px', textAlign: 'justify' }}>
            <div id="innerwrap">
              <div className="right">
                <ul>
                  <table className="gtitle2" width="100%">
                    <tbody>
                      <tr>
                        <td width="5%" align="center">MBA Programme- Curriculum</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="gtitle1">
                    The MBA curriculum follows a SEMESTER system from Anna University. The syllabus and course structure are designed by the university itself. The MBA programme is AICTE approved.
                  </p>
                  <p align="center">
                    <h3><a href="MBA_2021.pdf" target="_blank">REGULATIONS – 2021</a></h3>
                  </p>
                  <ul className="gtitle1">
                    <li><img src="images/img08.gif" alt="" />&nbsp;&nbsp;Any two specializations have to be chosen out of the five.</li>
                    <li><img src="images/img08.gif" alt="" />&nbsp;&nbsp;Total of eight electives with minimum of three electives from each of the two specializations have to be completed. The remaining two electives can be taken from any of the five specializations.</li>
                    <li><img src="images/img08.gif" alt="" />&nbsp;&nbsp;Maximum of two electives in a specialization can be chosen in a Semester.</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumAndElectives;
