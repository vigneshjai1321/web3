import './governing.css';
import AboutUs from '../aboutUs/AboutUs';

const Governing = () => {
  return (
    <div className='governing'>
          <div className='aboutusCom'>
            <AboutUs />
          </div>
          <div className="contentb">
    <h2>Governing Council</h2>
    <div style={{margin: "5px 8px 5px 8px"}}>
        <div>
            <h1 align="center"><strong>Board of Governing Council</strong></h1>
            <table width="800" border="1" cellspacing="0" cellpadding="0" align="center">
                <thead>
                    <tr>
                        <th scope="col" width="10">Sl.No.</th>
                        <th scope="col" width="150">Name</th>
                        <th scope="col" width="150">Designation</th>
                        <th scope="col" width="250">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Dr. D. Selvaraj</td>
                        <td>Chairman Cum Managing Trustee</td>
                        <td>255/D6, Divya Nivas
                            Samiyappa Nagar
                            North Madhavi Road
                            Perambalur
                        </td>
                    </tr>
                   
                    <tr>
                        <th scope="row">2</th>
                        <td>N. Gopalaswamy</td>
                        <td>Industrialist</td>
                        <td>Lifetime Director
                            Dalmia Cements(Bharat) Limited
                            Dalmiapuram
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Dr. G. Kannabiran</td>
                        <td>Educationalist</td>
                        <td>Dean
                            Department of Management Studies
                            National Institute of Technology
                            Trichy
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>R.C. Venkatesh</td>
                        <td>Industrialist</td>
                        <td>President
                            M/s. MCR Freight Systems
                            6th Main, Sonappa Layout
                            Bangalore
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Dr. M. Ganesh</td>
                        <td>Director</td>
                        <td>Holy Angels School of Business
                            NH 45, Chennai- Trichy National Highways
                            Siruvachur.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


    </div>
  )
}

export default Governing