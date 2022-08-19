import React from 'react';
import Navbar from '../components/navbar';
import '../App.css';
import Button from '../components/button'
import Subscribe from'../components/subscribe'
import Boxes from '../components/boxes'


export default function Home() {
 

  return (
    <div className="App">
      <Navbar/>
     
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

