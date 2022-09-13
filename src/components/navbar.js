import React, {Component} from "react";
import { BrowserRouter as Route, Router, Routes, Link} from 'react-router-dom'




class Navbar extends Component{
    render(){
        
        
        return(

            <div id="navbar">
                                        

                <ul>
                    
                    
                <button type="image" id="logo"><Link to="/home"></Link></button>
                    
                    
                    
                    
                    
                    
                    <li>
                    <Link to="/contact">Contact</Link>   
                    
                    </li>
                    <li>
                    <Link to="/teams">Teams</Link>
                    </li>
                    <li>
                    <Link to="/portfolio">Portfolio</Link>
                    
                    </li>
                    <li>
                    <Link to= "/services">Services</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
export default Navbar