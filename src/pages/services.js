import Customeracquisition from "../servicepages/customeracqusition";
import Design from "../servicepages/design"
import Development from "../servicepages/development";
import Whitelabelapp from "../servicepages/whitelabelapp";
import { useState } from "react";


const componentsToUse=(key)=>{
    const itemObject= {
        design:<Design/>,
        development:<Development/>
    }
    return itemObject[key]
 }

export default function Services(){
    const [selectedItem, setSelectedItem]=useState("design")
    
    
    const displaycomp=(item)=>{
       console.log(item)
        return componentsToUse(item)
    }  
    return(
    
    
        
        <ul id="services" >

           <span id="servicelist">
            <li>{"["}Click to learn what to do{"]"}</li>
            <li>
                <button type="button" onClick={()=>setSelectedItem("design")} >Design</button>
            </li>
            <li>
                <button type="button" onClick={()=>setSelectedItem("development")}>Development</button>
            </li>
            <li>
                <button type="text" onClick="">Customeracquisition</button>
            </li>
            <li>
            <button type="text" onClick="">
                    Whitelabelapp
            </button>
            </li>
            </span>
            {displaycomp(selectedItem)}
           
            {/* <p>We can build anything. Our diverse team comes from a wide array
             of backgrounds
             and use a diverse group of languages to 
             create the software that we do. Wheather it
             an food delivery app or a rock selling site,
             we can get the job done<br/><a href="">click here to learn more</a></p> */}
        </ul>

       


    )
    
}