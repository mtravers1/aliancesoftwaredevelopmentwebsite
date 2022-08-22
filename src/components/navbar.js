import React, {Component} from "react";




class Navbar extends Component{
    render(){
        
        
        return(

            <div id="navbar">
                                        

                <ul>
                    
                    
                <button type="image" id="logo"><a href="/home"></a></button>
                    
                    
                    
                    
                    
                    
                    <li>
                    <a href="./contact">Contact</a>
                    </li>
                    <li>
                    <a href="/teams">Team</a>
                    </li>
                    <li>
                    <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                    <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
export default Navbar