let imagebulb=document.getElementById('imagebulb');
const bulbOn=()=>{
    // let imagebulb=document.getElementById('imagebulb');
imagebulb.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg");
}
const bulbOff=()=>{
    // let imagebulb=document.getElementById('imagebulb');
    imagebulb.setAttribute("src","https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg");
}

let divElement=document.createElement('div');
divElement.id="toggle-button";
let buttonobj=document.createElement('button');
buttonobj.setAttribute('onclick','toggle()')
buttonobj.innerHTML="ON";


let imgSrcValue=imagebulb.getAttribute('src')
console.log(imgSrcValue);

const toggle=()=>{
  /*  if(imagebulb.src=='https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg')
  {
    /* imagebulb.src="https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg"; 
    bulbOn();
    console.log("inside if" + imgSrcValue);
imagebulb.style.height="200px";
imagebulb.style.width="100px";
//    buttonobj.innerHTML="OFF"; 
 
  else
  {
   //  imagebulb.src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"; 
   bulbOff();
    console.log("inside else" + imgSrcValue);
    //  buttonobj.innerHTML="ON";  
      
  }  */
  // add on click image bulb on and off
  if (imagebulb.src.match("ONbulb"))
imagebulb.src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
      else
      imagebulb.src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
}

//addEventListener('click',toggle,true);

// divElement.appendChild(buttonobj);
console.log(divElement);
let bodyobj=document.body;
let buttonsobj=document.getElementById('buttons');
// bodyobj.insertBefore(divElement,buttonsobj);
console.log(bodyobj);




