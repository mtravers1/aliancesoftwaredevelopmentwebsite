import Customeracquisition from "../servicepages.js/customeracqusition";
import Design from "../servicepages.js/design"
import Development from "../servicepages.js/development";
import Whitelabelapp from "../servicepages.js/whitelabelapp";


export default function Services(){

    function change(){
        
    }
       
    return(
    
    
        
        <ul id="services" >

           <span id="servicelist">
            
            <li>
                <button type="text">Design</button>
            </li>
            <li>
                <button type="text" onClick={<Development/>}>Development</button>
            </li>
            <li>
                <button type="text" onClick={<Customeracquisition/>}>Customeracquisition</button>
            </li>
            <li>
            <button type="text" onClick={<Whitelabelapp/>}>
                    Whitelabelapp
            </button>
            </li>
            </span>

            <p>We can build anything. Our diverse team comes from a wide array
             of backgrounds
             and use a diverse group of languages to 
             create the software that we do. Wheather it
             an food delivery app or a rock selling site,
             we can get the job done<br/><a href="">click here to learn more</a></p>
        </ul>

       


    )
    
}