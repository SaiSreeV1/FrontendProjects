        //Resume generator generates dynamically after button clicks Resume when user enters information 
        function addNewWEField(){
            // console.log("added new WE")
            // create new text area dynamically
            let newNode=document.createElement('textarea');
        newNode.classList.add('form-control');
        newNode.classList.add('weField');
        newNode.classList.add('mt-2');
        newNode.setAttribute('rows','3');
        newNode.setAttribute('placeholder','Enter here');


        let weObj=document.getElementById('we');
        let weAddButtonObj=document.getElementById('weAddButton');

        weObj.insertBefore(newNode,weAddButtonObj);

        }

        function addNewAQField(){
            // console.log("added new AQ")
            // create new text area dynamically
            let newNode=document.createElement('textarea');
        newNode.classList.add('form-control');
        newNode.classList.add('aqField');
        newNode.classList.add('mt-2');
        newNode.setAttribute('rows','3');
        newNode.setAttribute('placeholder','Enter here');


        let aqObj=document.getElementById('aq');
        let aqAddButtonObj=document.getElementById('aqAddButton');

        aqObj.insertBefore(newNode,aqAddButtonObj);

        }
// set the file as checked after selecting image/file 
        let fileField=document.getElementById("imgField");
        fileField.onchange=()=>{
            // debugger;
            
                if(fileField.files.length>0){

                    // document.getElementById('fileidcss').innerHTML="\2714";
                document.getElementById('fileidcss').setAttribute('class','fa fa-check')
                // document.getElementById('fileidcss').classList.add( "completedmark");
                
                document.getElementById('fileidcss').style.color="green";
                console.log("add checkmark " +fileField.length);
            }
            else{
                // document.getElementById('fileidcss').classList.remove( "completedmark");
                document.getElementById('fileidcss').removeAttribute('class');
                // document.getElementById('fileidcss').style.color="green"; 
            }
            };
        // it will take the values from our form field and set the values to our template

        // generating CV

        function generateCV(){
        // console.log("generate CV");

        let nameField=document.getElementById('nameField').value;
        let nameT1=document.getElementById("nameT1");
        nameT1.innerHTML=nameField;

        // direct ways to come up 

        document.getElementById("nameT2").innerHTML=nameField;

        // content
        document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
        // address
        document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    // choose image ie code for setting img
    // document.getElementById("imgT").src=document.getElementById("imgField").value -----> not working correctly

    // let fileField=document.getElementById("imgField");
    let fileAt0=fileField.files[0];
    // get images array to pick our image it is firstchild so use files[0]
    console.log(fileAt0);

    // fileField.classList.add("span")
    // if(fileAt0.value != "") {
        //     let check= document.getElementById("checkmark");
        // //     var span=document.createElement('span');
    // //     span.id="span-id";
    // //     // span.className="fa-regular fa-square-check";
    //    fileField.classList.add("checkmark");
    // // span.innerHTML='<i class="fa-regular fa-square-check"></i>';
     
    //         // check.setAttribute('class','fas fa-trash'); 
    //         check.classList.toggle('done'); 

    //     fileField.appendChild(check);
    //     console.log(fileField)
    
    // fileField.appendChild(check.createElement("span").appendChild(document.createTextNode('☑')));
        // fileAt0.appendChild(check.createElement("span").appendChild(document.createTextNode('/u2611')));
        
        //     // you have a file
        // fileAt0.classList.add("span");
        let reader=new FileReader();
        reader.readAsDataURL(fileAt0);
    //     let imgContent=null;
    //     if(fileAt0.value != "") {

            
    //            imgContent=reader.result  +`<span class="tickmark">&#10004;</span>`;
    // let selImg=null;

    // fileField.onclick = function() {
    //     if (selImg) {
    //       selImg.className = "myimg";
    //       selImg.nextSibling.className = "mying";
    //     }
    //     this.className = "highlighted";
    //     this.nextSibling.className = "highlighted";
    //     selImg = this;
    //   };

    // }
    // only FileReader object can read the file/img data
    
    // to set image
    console.log(reader.result);
    // set the image to template

    // calls only when page loading ends
    
    
    // time taken to read file at that time earlier code runs once img loading ends the our img be set
    // fileField.onchange=function(){
    //    fileField.classList.add("checkmark");
    // // fileField.setAttribute("type","checkbox");
    // }
    
    // if(fileField.value!==""){
       
    //  console.log(fileField);
    //  let span =document.createElement("SPAN");
    //  span.style.display="inline"
    //  fileField.appendChild(span);
    //  console.log(fileField);


    // }

    reader.onloadend=function(){ 
        
        // if(fileAt0==""){
        //     alert("Please select any image");
        //     console.log("Hello on fileAt0=='' ");
    
        // }
        // if(fileAt0!==""){
        // if(fileField.value!==""){
           
        //  console.log(fileField);
        //  let span =document.createElement("SPAN");
        //  span.innerHTML="&#10004;";
        //  fileField.appendChild(span);
        //  console.log(fileField);
    
    
        // }
        document.getElementById("imgT").src=reader.result;
        // document.getElementById("imgTcss").setAttribute("class","fa fa-check");
        document.getElementById("imgTcss").classList.add('fa','fa-check');
        // document.getElementById("imgT").classList.add('check');
        // document.getElementById("imgT").classList.add('fa','fa-check','check');
        

        // document.getElementById("imgT").checked=reader.result;

        // Resource requests whose URLs contained both removed whitespace (\n, \r, \t) characters and less-than characters (<) are blocked.
        // document.getElementById("imgT").src=imgContent;
        };


    // or can use setAtrribute(src,reader.result)


// document.getElementById("imgT").setAttribute("src","reader.result");


        // links

        document.getElementById("gmailT").innerHTML=document.getElementById("gmailField").value;
        document.getElementById("linkedT").innerHTML=document.getElementById("linkedInField").value;
        document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
        
        // objective
        document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
        // work experience
        let wes=document.getElementsByClassName("weField");
        // array of textarea's come here and put those in respective list of template so use for-of loop to iterate each array 
        
        let str="";
        for(let a of wes){
            str=str+`<li>${a.value}</li>`;
            console.log(a);
            console.log(str);


        }

        document.getElementById("weT").innerHTML=str;

        // academic qualification
        let aqs=document.getElementsByClassName("aqField");
        // array of textarea's come here and put those in respective list of template so use for-of loop to iterate each array 
        
        // without taking new string str already having values and aqs added values combinely generated in aqField
        let str1="";
        for(let b of aqs){
            str1=str1+`<li>${b.value}</li>`;
            // console.log(b);
            // console.log(str1);
        }

        document.getElementById("aqT").innerHTML=str1;


        // hiding our cv-form after generating cv

        document.getElementById('cv-form').style.display="none";
        document.getElementById('cv-template').style.display="block";

        }

        function printCV(){
            // console.log("print cv")

            window.print();

        }