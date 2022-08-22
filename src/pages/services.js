import Customeracquisition from "../servicepages.js/customeracqusition";
import Design from "../servicepages.js/design"
import Development from "../servicepages.js/development";
import Whitelabelapp from "../servicepages.js/whitelabelapp";


export default function Services(){
    // let component
    // switch(window.location.pathname){
    //     case "../servicepages.js/customeracqusition":
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
 
        
    //     default:
    // }
    return(
        
    
        
        <ul id="services" >
           
            <li>
                <button onClick={<Design/>}><a href="/design">Design</a></button>
            </li>
            <li>
                <button onClick={<Development/>}><a href="/development">Development</a></button>
            </li>
            <li>
                <button onClick={<Customeracquisition/>}><a href="/cusomeracqusition">Customeracquisition</a></button>
            </li>
            <li>
            <button onClick={<Whitelabelapp/>}>
                    <a href="/whitelabelapp">Whitelabelapp</a>   
            </button>
            </li>
        </ul>
    )
    
}