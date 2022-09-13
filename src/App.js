import Navbar from './components/navbar';
import './App.css';
// import Boxes from './components/boxes';
// import Button from './components/button';
import About from "./pages/about";
import Teams from "./pages/teams";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Home from './pages/home';
import Subscribe from './components/subscribe';
import Services from './pages/services';
// import Customeracquisition from './servicepages.js/customeracqusition';
// import Design from './servicepages.js/design';
// import Development from './servicepages.js/development';
// import Whitelabelapp from './servicepages.js/whitelabelapp';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'

function App() {
  
  // let component
  // switch(window.location.pathname){
  //     case "/home":
  //     case "/":
  //         component=<Home/>
  //         break;
  //     case"/about":
  //         component=<About/>
  //         break;
  //     case"/contact":
  //         component=<Contact/>
  //         break;
  //     case"/teams":
  //         component=<Teams/>
  //         break;
  //     case"/portfolio":
  //         component=<Portfolio/>
  //         break;
  //     case"/services":
  //       component=<Services/>
  //         break;
    //   case "../servicepages.js/customeracqusition":
    //         component=<Customeracquisition/>
    //         break;
    //     case"/design":
    //         component=<Design/>
    //         break;
    //     case"/development":
    //         component=<Development/>
    //         break;
    //     case"/whitelabelapp":
    //         component=<Whitelabelapp/>
    //         break;
      
  //    default:
  // }
  return (
    <Router>
    {/* <div className="App"> */}
      
    <Navbar/>
    <div class="verticalLine">
        <Routes>
        
          
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/teams' element={<Teams/>}/>
          
          {/* </div> */}
        </Routes>

      </div>
       <Subscribe/>
      </Router>
  );
}

export default App;