



export default function Portfolio(){
    // const track=document.querySelector('span')
    // const slides=Array.from(track.children)
    // const leftbutton=document.getElementById("thisway")
    // const rightbutton=document.getElementById("seemore")
    // const slideWidth= slides[0].getBoundingClientRect().width;

        //   slides.forEach((slide, index)=>{
        //   slides.style.left = slideWidth *index +'px'
        //  })

    //   slides[0].style.left= slideWidth *0 +'px';
    //   slides[1].style.left=slideWidth *1  + 'px'
    //   slides[2].style.left=slideWidth*2 + 'px'


    //   const moveToSlide = (track, currentSlide, targetSlide) =>{
    //     track.style.transform = 'translateX(-' +amountToMove + ')';
    //     currentSlide.classList.remove('porpic1')
    //     targetSlide.classList.add('current-slide')
    //   }
    //   
    
//         rightbutton.addEventListener('click', e  =>{
    //     const currentpic = track.querySelector('porpic1')
    //     const nextslide = currentpic.nextElementSibling
   

    //    moveToSlide(track, currentSlide, nextSlide)
    //   })


    //   leftbutton.addEventListener('click', e  =>{
    //     
    //     const currentpic=track.querySelector('porpic')
    //     const  prevSlide=currentpic.previousElementSibling;
    //     
    //     moveToSlide(track, currentSlide, prevSlide)
    //   })



  
    return(
        
    <div id="portfolio" >

        <h1>These are our creations.</h1>
        
        <span id="port">
        
        <img scr="./assets/pic.jpeg"  class="porpic1" alt="pic"></img>
        
        <img scr="./assets/pic.jpeg" class="porpic1" alt="pic"></img> 
        
        <img scr="./assets/pic.jpeg" class="porpic1" alt="pic"></img>
        
        </span>

        <span class="leftrightport">
            <button type="button" id="thisway" onClick={""}>This way</button>
            <button type="button" id="seemore" onClick={""}>that way</button>
        </span>
        
            
        
    </div>)

    
}



// const leftbutton=document.querySelector('thisway')
// const rightbutton=document.querySelector("seemore")

// const slideWidth= slide[0].getBoundingClientRect().width;

// // slide[0].style.left= slideWidth *0 +'px';
// // slide[1].style.left=slideWidth *1  + 'px'
// // slide[2].style.left=slideWidth*2 + 'px'




