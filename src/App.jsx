
import './App.css';
import { RouterProvider ,Outlet, createBrowserRouter } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Marquee from './components/marq/Marquee';
import Footer from './assets/footer/Footer';
import Home from './pages/home/Home.jsx';
import Chairman from './pages/Chairman/Chairman.jsx';
import Trustes from './pages/trustes/Trustes.jsx';
import Governing from './pages/governing/Governing.jsx';
import AboutCollege from './pages/aboutCollege/AboutCollege.jsx';
import Advisor from './pages/advisor/Advisor.jsx';
import Director from './pages/director/Director.jsx';
import ProgramStructure from './pages/program structure/ProgramStructure.jsx';
import CurriculamAndElectives from './pages/curriculam&electives/CurriculamAndElectives.jsx';
import CurriculamAndAdmin from './pages/curriculamAndAdmin/CurriculamAndAdmin.jsx';
import Guestlecture from './pages/guestlecture/Guestlecture';
import Admission from './pages/admission/Admission.jsx';


import Hasbmedia from './pages/hasbmedia/Hasbmedia.jsx'
import Contact from './pages/contact/Contact.jsx'
import Facilities from './pages/facilities/Facilities';
 

function App() {
  
  const Layout = ()=>{
    return(
      <div className='components'>
        <Header />
        <Nav />
        <Carousel />
        <Marquee />
          
        <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
          <Outlet />
        </div>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        
          <Layout />
       
      ,
      children:[
        {
          path: "/",
          element: <Home />
        }
        ,
        {
          path:"/chairman",
          element:<Chairman />
       },
       {
        path:"/trustes",
        element:<Trustes />
      },
        
      {
        path:"/governingcouncil",
        element:<Governing />
      },
      {
        path:"/aboutcollege",
        element:<AboutCollege />
      },
      {
        path:"/advisor",
        element:<Advisor />
      },
      {
        path:"/director",
        element:<Director />
      },
      {
        path:"/programstructure",
        element:<ProgramStructure />
      },
      {
        path:"/curriculumandelectives",
        element:<CurriculamAndElectives />
      },
      {
        path:"/curriculamandadmin",
        element:<CurriculamAndAdmin />
      },
      {
        path:"/guestlecture",
        element:<Guestlecture />
      },
      {
        path:"/facilities",
        element:<Facilities />
      },
      {
        path:"/admission",
        element:<Admission />
      },
      {
        path:"/hasbmedia",
        element:<Hasbmedia />
      },
      {
        path:"/contact",
        element:<Contact />
      }
      
      ]
    }
  ])



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
