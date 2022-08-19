import Navbar from './components/navbar';
import './App.css';
import Boxes from './components/boxes';
import Button from './components/button';
import About from "./pages/about";
import Teams from "./pages/teams";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Home from './pages/home';
import Subscribe from './components/subscribe';
function App() {
  
  let component
  switch(window.location.pathname){
      case "/home":
          component=<Home/>
          break;
      case"/about":
          component=<About/>
          break;
      case"/contact":
          component=<Contact/>
          break;
      case"/teams":
          component=<Teams/>
          break;
      case"/portfolio":
          component=<Portfolio/>
          break;
      
      default:
  }
  return (
    <div className="App">
      
      <Navbar/>
      {component}
      <div class="verticalLine">

      <div id="home">
        <div>
      <p id="title">Alliance Software development</p>
      <h1 id="text">We design and build the <br/>future of tech, retail and<br/> commerce</h1>
      <Button/>
      <Boxes/>
      </div>
      <div id="photo">

      </div>
      </div>

      </div>
 
  <Subscribe/>
      </div>
       
   
  );
}

export default App;