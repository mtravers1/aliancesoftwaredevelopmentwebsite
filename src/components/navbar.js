import React, {Component} from "react";




class Navbar extends Component{
    render(){
        
        
        return(

            <div id="navbar">
                
                <ul>
                    
                    <li>
                    
                        <a href="/home"><img scr="" alt="asd"></img></a>
                    </li>
                    
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                    <a href="/services">Services</a>
                    </li>
                    <li>
                    <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                    <a href="/teams">Team</a>
                    </li>
                    <li>
                    <a href="./contact">Contact</a>
                    </li>
                    
                    
                </ul>
            </div>
        )
    }
}
export default Navbar