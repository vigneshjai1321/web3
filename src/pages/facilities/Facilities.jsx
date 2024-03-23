import React from 'react';
import'./facilities.css'
import ad1 from '../../assets/images/ad1.jpg'
import ad2 from '../../assets/images/ad2.jpg'
import ad3 from '../../assets/images/ad3.jpg'
import ad4 from '../../assets/images/ad4.jpg'
import ad5 from '../../assets/images/ad5.jpg'
import arq1 from '../../assets/images/arq1.gif'
const Facilities = () => {
  return (
    <div className="contentbfull">
      <h2>Admission</h2>
      <div style={{ margin: '5px 8px' }}>
        <div>
          <h3>Class Room</h3>
          <img src={ad1} height="120" width="180" align="absmiddle" />
          <p>
            <img src={arq1} /> All classrooms are equipped with multimedia and audio-visual equipment to facilitate effective learning. They are well designed to promote maximum interaction between the faculty and the students. It is imperative for students to have an enriching experience in a study environment that inspires
          </p>
          <h3>Lab Facility</h3>
          <img src={ad2} height="120" width="180" align="absmiddle" />
          <p>
            <img src={arq1} /> An air-Conditioned Computer Laboratory equipped with sophisticated information technology systems<br /><img src={arq1} /> A well-equipped library comprising the syllabus-based text and reference books, National and international journals /leading newspapers and magazines etc…
          </p>
          <h3>Transport Facility</h3>
          <img src={ad3} height="120" width="180" align="absmiddle" />
          <p>
            <img src={arq1} /> Our College has Transportation which provides safety to the students.
          </p>
          <h3>Library Facility</h3>
          <img src={ad4} height="120" width="180" align="absmiddle" />
          <p>
            <img src={arq1} /> The Library plays a vital role in promoting academic activities. It continues to fulfill its obligation by providing the necessary infrastructure facilities in the form of books, audio-video cassettes, CD ROMS, current and back volumes of journals, etc. It has well bound collection of more than 1,000 volumes with the periodical addition of new books to meet the growing and varied requirements of students and faculty members. The library provides a calm and cozy atmosphere, conducive to uninterrupted concentrated reading. In addition, the library has also adopted new technologies like Internet, e-mail, CDROM workstation and covers International and e-journals for global communication and information.
          </p>
          <h3>Hostel Facility</h3>
          <img src={ad5} height="120" width="180" align="absmiddle" />
          <p>
            <img src={arq1} /> There are separate hostels for boys and girls within the college campus itself.
          </p>
          <p>
            <img src={arq1} /> The atmosphere in the hostel is best suited for studying without any disturbances and the students can develop integrated personalities over a period of harmonious living in the hostel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
