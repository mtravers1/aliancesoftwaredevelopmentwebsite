import React, {Component} from "react";
// import Arrowbutton from './components/arrowbutton';

class Boxes extends Component{
    render(){
        return(
            <div id = "boxes">
                <div id="web">
                    <br/>
                <ion-icon id="boxicon" name="globe-outline"></ion-icon>

                <p><h3>Web Design</h3><br/>
                We create more than just Websites, we create online expierences
                </p>
                <br/>
                <a href ="" className="arrowbw">
                    <span>
                    <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
                    </span>
                </a>
                <br/>
                




                </div>
                <div id="app">
                    <br/>
                <ion-icon id="boxicon" name="briefcase-outline"></ion-icon>
                <p ><h3>App Design</h3>Design with the functionality and the end consumer in mind
                </p>
                
                
                <a href ="" className="arrowba">
                    <span>
                    <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
                    </span>
                </a>
                
                
                
                <br/>
                </div>




                <div id="dev">
                    <br/>
                <ion-icon id="boxicon" name="code-working-outline"></ion-icon>
                <p ><h3>Development</h3><br/>Our team of developers are the best in industry and have years of expierence in bringing even the most complex designs to life
                </p>
                
                <a href ="" className="arrowbd">
                    <span>
                    <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
                    </span>
                </a>
                
                <br/>
                
                </div>
                
                
                
                <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                

            </div>
        )
    }
}

export default Boxes