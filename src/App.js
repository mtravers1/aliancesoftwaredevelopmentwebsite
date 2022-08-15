import Navbar from './components/navbar';
import './App.css';
import Button from './components/button'
// import Subscribe from'./components/subscribe'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="verticalLine">

      <div id="home">
      <h1>Alliance Software development</h1>
      <p>We design and build the future of tech, retail and commerce</p>
      <Button/>
      {/* <Subscribe/> */}
      </div>
      </div>
    </div>
  );
}

export default App;