import React from 'react';
import'./hasbmedia.css'
import ha1 from '../../assets/images/ha1.jpg'
import ha2 from '../../assets/images/ha2.jpg'
import h3 from '../../assets/images/ha3.jpg'
import h4 from '../../assets/images/h4.jpg'
const Hasbmedia = () => {
  return (
    <div className="contentbfull">
      <h2>Admission</h2>
      <div style={{ margin: '5px 8px 5px 8px' }}>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="960">
          <tbody>
            <h6> Feb 15 1999 </h6>
          <img src={ha1} height="120" width="180" align="absmiddle" />
          <img src={ha2} height="120" width="180" align="absmiddle" />
          <img src={h3} height="120" width="180" align="absmiddle" />
          <img src={h4} height="120" width="180" align="absmiddle" />
            <tr>
              <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                  <tbody>
                    <tr>
                      <td colSpan="2" background="hc1_04.jpg" height="1"></td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="facu3" height="20" valign="middle">
                        <div align="center"><strong>February 18, 2015</strong></div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" height="1"></td>
                    </tr>
                    <tr>
                      <td colSpan="2" height="10"></td>
                    </tr>
                    <tr>
                      <td height="15" width="145" align="center">
                        <a href="media/feb1815.jpg" rel="lightbox" target="_blank">
                          <img src="media/feb1815.jpg" border="0" height="96" width="138" />
                        </a>
                      </td>
                      <td height="15" width="145" align="center">
                        <a href="media/feb1815.jpg" rel="lightbox" target="_blank">
                          <img src="media/feb1815.jpg" border="0" height="96" width="138" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" height="15"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                  <tbody>
                    {/* Add content for the second row */}
                  </tbody>
                </table>
              </td>
            </tr>
            {/* Add content for the second row */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hasbmedia;
