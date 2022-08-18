import React, {Component} from "react";

class Arrowbutton extends Component{
    render(){
        return(
            <button type ="button" className="arrowb">
                    <span>
                    <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
                    </span>
                </button>
        )
    }
}

export default Arrowbutton