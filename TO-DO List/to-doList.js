var input=document.getElementById('userInput');
var enterButton=document.getElementById('enter');
var ul=document.querySelector('ul');
var item=document.getElementsByTagName('li');

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}
function createListElement(){
  var li=  document.createElement('li'); // creates an element "li"
 
 
  


//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
    function crossOut(){
        // if(event.span=='click'){
        //     span.setAttribute('class','fa-regular fa-square-check');
        //     span.setAttribute('style','width:98%;background-color:green;text-transform:auto');
    //     // }
       if(li.childNodes.length<3){
        var span=document.createElement('span');
        span.id="span-id";
        // span.className="fa-regular fa-square-check";
    span.innerHTML='<i class="fa-regular fa-square-check"></i>';
     
                
        li.appendChild(span); 
        // li.classList.toggle('done');
        console.log("unordered list "+span.nodeName);
        console.log("unordered list "+ul);
        
    }
    
    var toggle=li.classList.toggle("done");
    console.log("toggled value "+toggle);
    if(toggle==false){
        li.childNodes[2].remove();
    }
    
    
}

    li.appendChild(document.createTextNode(input.value));
    //makes text from input field the li text
 
    

   ul.appendChild(li); //adds li to ul
   input.value=""; //Reset text input field
 
 console.log("unordered list "+ul.nodeName);
 


li.addEventListener('click',crossOut);
//END STRIKETHROUGH

// START ADD DELETE BUTTON
var dBtn=document.createElement('button');
// debugger;
dBtn.setAttribute('class','fas fa-trash')

// dBtn.appendChild(document.createTextNode('X'));
li.appendChild(dBtn);
dBtn.addEventListener('click',deleteListItem);
// END ADD DELETE BUTTON


// a token is a single element of a programming language.---1) constants, 2) identifiers, 3) operators, 4) separators, and 5) reserved words

//add()	Adds one or more tokens to the list,  remove()	Removes one or more tokens from the list,  toggle()	Toggles between tokens in the list

	//ADD CLASS DELETE (DISPLAY: NONE)

function deleteListItem(){
    // li.classList.add('delete');
    // li.remove();
    // li.removeChild(dBtn); //not working removes only text 'X'
    var parentNodename=dBtn.parentNode;
    // console.log(parentNodename.nodeName);
    console.log(parentNodename);
    ul.removeChild(li);
}

//END ADD CLASS DELETE
}

function addListAfterClick(){
    if (inputLength()>0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}
    function addListAfterKeypress(event){
        if (inputLength()>0 && event.which===13) {  //this now looks to see if you hit "enter"/"return"
            //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
            createListElement();
        }
    }


   enterButton.addEventListener("click",addListAfterClick);
    input.addEventListener("keypress",addListAfterKeypress);


