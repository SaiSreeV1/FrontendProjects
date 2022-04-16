var  ulobj =document.querySelector('ul');
var btnAddList=document.getElementById('btn-add-list');

var input=document.getElementById('input-id');

function inputLength(){
    return input.value.length;
}

function createListElement(){
   var liobj= document.createElement('li');
// let inputValue=input.value;
   liobj.appendChild(document.createTextNode(input.value));
//    liobj.appendChild(document.createTextNode(inputValue));

var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liobj.appendChild(span);

/* // // Create a "close" button and append it to each list item ie for existing list
// // var myNodelist = document.getElementsByTagName("LI"); ----------->not working
// var i;
// for (i = 0; i < liobj.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   liobj[i].appendChild(span);
// }
// Click on a close button to hide the current list item for existing list
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   } */
console.log((liobj))
ulobj.appendChild(liobj);

// inputValue='';
input.value='';
console.log(ulobj);
span.addEventListener('click',deleteListItem);
function deleteListItem(){

//    var spanParent= span.parentNode;----->not any use
   ulobj.removeChild(liobj);
}
}

function addListAfterClick(){
    if(inputLength()<=0){
        
        alert("You must enter something to add to List...");
    }
    else if(inputLength()>0){ //makes sure that an empty input field doesn't create a li
        createListElement();
    }
    else
    console.log('input value length in addListAfterClick '+inputLength+' input '+input);
}
    function addListAfterKeypress(event){
        // if (inputLength()>0 && event.which===13){--->not workingwith every time adding else block
        // if (inputLength()>0 || event.which===13){
        if (inputLength()>0 && event.which===13){

         // if (inputLength()>0 && event.which===13) {  //this now looks to see if you hit "enter"/"return"
             //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
             createListElement();
         }
        // else if(inputLength()<=0 && event.which===13){
        // if(inputLength()<=0){
            else if(inputLength()<=0)
            {
        
            alert("You must enter something to add to List...");
        }
        else{
        // console.log('input value length in addListAfterKeypress '+inputLength+' input '+input);
        }
    }

btnAddList.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

// Add a "checked" symbol when clicking on a list item
var ulobj = document.querySelector('ul');
ulobj.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
