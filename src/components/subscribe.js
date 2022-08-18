import React, {Component} from "react";

class Subscribe extends Component{
    render(){
        return(
           
            <div id="sub">
            <span >subscribe to the know</span>
            <form >
            <input id="subinput" type="text" placeholder="enter you email"></input>
            
            <button className="subbutton" type="submit" name="Subcribe " value="">
                <span>Subscribe</span>
            </button>
          </form>
          </div>
         
          
        )
    }
}

export default Subscribe