// Whenever user click on Generate number button it generates random number but it can't displayed to user then user have to guess the number if user guesses correct number then user wins the game otherwise lost the game. 

// My approach to for number guess game script file 
// var btnGenerate=document.getElementById("btn-generate");
// let btncheck=document.getElementById("btn-check");
// function generateNumber(){
    
//     let ran=Math.floor(Math.random()*10+1);
//     console.log("random number "+ran);
//     btnGenerate.value=ran;
//     // console.log(btnGenerate.value);
// }
// function check(){
//     let inputIdValue =document.getElementById("inputIdValue").value;
//     console.log(" in check "+inputIdValue);
// if(btnGenerate.value==inputIdValue){
//     alert("You win the Game");

// }
// else 
// alert("Oops!...You lost the Game");
// // hiding generate number 

// document.getElementById("generateNumber").style.display="none";
// document.getElementById("guess_number").style.display="block";
// }

let number;

const generate_number=()=>{
let n1=Math.random();
console.log(n1);

let n2=n1*10;
console.log(n2);

n2=Math.trunc(n2);
console.log(n2);

// we require dice no b/w 1 to 6
n2=n2%6+1;
console.log(n2);

number=n2;
console.log(number);
};

// call arrow this function outside arrow func

// generate_number();

const generate_number_btn_click=()=>{
    // display section3 and hide section1 and 2
    // document.getElementById("section1").style.display="none";
    // document.getElementById("section2").style.display="none";
    // document.getElementById("section3").style.display="block";
    // generate_number();


    document.querySelector("#section1").style.display="none";
    document.querySelector("#section2").style.display="none";
    document.querySelector("#section3").style.display="block";
    // use setTimeout func to give some time to display section2 and generate number after clicking generate number btn 
    
    setTimeout(()=>{

        document.querySelector("#input_field").value="";
        
        document.getElementById("input_field").onfocus=document.getElementById("input_field").style.border=" 3px solid wheat";

        
        generate_number();
        document.querySelector("#section1").style.display="none";
        document.querySelector("#section2").style.display="block";
        document.querySelector("#section3").style.display="none";
        
    },3000);
}

const check_number=()=>{
    // let input_value=document.getElementById("input_field").value;
    let input_value=document.querySelector("#input_field").value;
    // input_value.focus().style.backgroundColor="red";       //not working
if(input_value==number)
    alert("Congrats, You won the Game");
else
alert("OOPS! , Your guess is wrong ");
// we didn't give chance to user so calls generate number btn with the help of generate_number_btn_click 
setTimeout(generate_number_btn_click,1000);
// generate_number_btn_click();
};



