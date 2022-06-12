// code written here using plain old javascript with using local storage to store locally ie even after reopened closed browser then we get added todos multiple session

let todos=[];
// let ids=[];
const addToDo=()=>{
    let title=document.getElementById("title").value;
    let desc=document.getElementById("desc").value;
    // let lastDate=document.getElementById("lastDate").valueAsDate;
    let lastDate=document.getElementById("lastDate").value;
    // lastDate.valueAsDate=new Date('2021-03-31');
    // lastDate.textContent = lastDate.valueAsDate.toString();
    
    // case 
    // localStorage.setItem(todos,[{title,desc},{title,desc},{title,desc}]);
    
    //declare todos=[] to get these values;
    
    if((title && desc)===""){
        alert("enter any value");
        console.log("enter any value");
        return false;
    }
    
    if((title && desc)!=0){
        
        // come as form of string
        let localTodos=localStorage.getItem("todos");
        if(localTodos!=null){
            
            // convert localTodos string to object using JSON
            todos=JSON.parse(localTodos);
            // console.log(todos)
        }

        let iscompleted=false;
//         const yyyy = lastDate.getFullYear();
// let mm = lastDate.getMonth() + 1; // Months start at 0!
// let dd = lastDate.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;

// lastDate = dd + '-' + mm + '-' + yyyy;
        // let month=lastDate.getMonth()==(0-9)?(0+(lastDate.getMonth()+1)):(lastDate.getMonth()+1);

        // let dt=lastDate.getDate()+'/'+month+"/"+lastDate.getFullYear();
        // let dt=(lastDate.getDate()<10?('0'+lastDate.getDate()):lastDate.getDate())+'/'+(((lastDate.getMonth()+1)<10)?("0"+(lastDate.getMonth()+1)):(lastDate.getMonth()+1))+"/"+lastDate.getFullYear();
        let dtarray=lastDate.split("-");
        let dt=dtarray[2]+("/"+dtarray[1])+("/"+dtarray[0]);

        // let dt=lastDate.valueAsDate.getFullYear()+"-"+(lastDate.valueAsDate.getMonth()+1)+"-"+lastDate.valueAsDate.getDate();
        let todoObject={
            title:title,
            desc:desc,
            id:Math.trunc(Math.random()*1000),
            // date:new Date(lastDate.valueAsDate).toLocaleDateString(),
            // date:lastDate.toDateString(),
            
            // date:lastDate,
            date:dt,
            // date:lastDate.addEventListener("input",()=>{
            //     date.textContent=lastDate.valueAsDate.toString();
            // }),
            // date:new Date().toLocaleDateString(),
            iscompleted       // es6 new feature of enhanced object literal
        };
        todos.push(todoObject);
        // if(todos.indexOf(todoObject)==true){
        //     alert("already todo exists");
        //     return false;
        // }
        // to store data only in string form 
        localStorage.setItem("todos",JSON.stringify(todos));
        // localStorage.setItem("todos",JSON.stringify([...JSON.parse(localTodos),{todo:todoObject.value,iscompleted:false}]));
        // localStorage.setItem("todos",todos);
        console.log(todos);
        
        
    }
    show_todo();
   
    
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("lastDate").value="";

};

    const show_todo=()=>{
        // debugger;
        //     var span = document.createElement("SPAN");
        //   var txt = document.createTextNode("\u00D7");
        //   span.className = "close";
        //   span.appendChild(txt);
        //   liobj.appendChild(span);
    
// come as form of string
let localTodos=localStorage.getItem("todos");
let content="";
if(localTodos==""||localTodos=="[]"||localTodos==null){
    // no todo 
    content+=`<br>
    <h3 class='text-white'>No TODO to show</h3>`;
}
else{
    let todos=JSON.parse(localTodos);
    for(let todo of todos.reverse()){
        // console.log(${todo.id});
        // console.log(todos[todo].title);
        // <h3>todos[todo].title</h3>
        // <p>todos[todo].desc</p>
      
        var t=todo.iscompleted==true?  "completedmark checkmark":"";
        content+=`
        
        <div class="card mt-2 text-primary" id=${todo.id}>
        <div class="card-body ${t}"  id=${todo.id+'test'} >
        <h3 onclick="completeTodo(this) ">${todo.title} </h3>
        <p>${todo.desc}</p>
        <h5> ${"Last date to complete: "+todo.date}</h5>
        
        <div class="close"> 
        <i class="fas fa-edit fa-2x" id=${todo.id} onclick="editTodo(this)"></i>
        <i class="fa fa-trash fa-2x " onclick="deleteTodo(this)"></i>
        </div>
        </div>
        </div>
        `;
        // <span class="fas fa-edit fa-2x" onclick="editTodo(this)"></span>
        
        // todo.iscompleted=!todo.iscompleted;
        // if(todo.iscompleted==true){
        //     ids.push(todo.id+'test');
        // // var card=document.getElementsByTagName("div")[1];
        // // var card=document.getElementById(id);
        // var card=document.getElementsByClassName("main-content")[0];
        // // var cardBody=document.getElementsByTagName("div")[2];
        // var newSpan=document.createElement('span');
        // // newSpan.style.color="green";
        // newSpan.setAttribute("class", "fa fa-check checkmark");
        // // newSpan.classList.add("fa","fa-check","fa-2x","checkmark");
        // }
        // else{
        // if(newSpan.classList.contains("fa","fa-check","checkmark").length>0){
        // // newSpan.classList.remove("fa","fa-check","fa-2x","checkmark");
        // newSpan.removeAttribute("class");
        // }
        // }
        //var sp=card.appendChild(newSpan);
    }
    
}



// ${todo.iscompleted? completeTodo():""}
//  <div class="card-body ${todo.iscompleted}" id=${todo.id+'test'} onclick="completeTodo(this)"></div> 

// { <button onclick='editTodo(this)' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-blue text-grey bg-green-600'>Edit</button> }


document.getElementById("show-item").innerHTML=content;
//for (var i=0;ids.length>0;i++){
//var newSpan = document.createElement('span');
// newSpan.style.color="green";
//newSpan.setAttribute("class", "fa fa-check fa-2x");
// newSpan.setAttribute("")
//document.getElementById(todo.id).classList.add("checkmark");
//document.getElementById(''+ids[i]+'').appendChild(newSpan);
//}
// ids=[];
};
show_todo();

//  store current task to track changes
var currentTodo=null;
    // get current task
function getCurrentTodo(e){
currentTodo=e.id;
}

// edit the task and update local storage
let  editTodo=(e) =>{
    debugger;
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.map((todo,index)=>{
        if(todo.id==e.parentElement.parentElement.children[3].children[0].id){
            todos.splice(index,1);
            document.getElementById("title").value=todo.title;   
            document.getElementById("desc").value=todo.desc;   
        //    let td= todo.date.split('/')
           
            // document.getElementById("lastDate").value=`${td[2]}-${td[1]}-${td[0]}`;   
            // let lastdate=todo.date;
            // const yyyy = lastdate.getFullYear();
// let mm =lastdate.getMonth() + 1; // Months start at 0!
// let dd =lastdate.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;

// lastdate =yyyy+ "/"+mm + "/" +dd;
            // document.getElementById("lastDate").value=lastdate.toString('mm/dd/yyyy');   
            var date = todo.date;
var datearray = date.split("/");

// var newdate = datearray[2]+(datearray[1].length==1?'-0':'-')+datearray[1] + (datearray[0].length==1?'-0':'-') + datearray[0] ;
// var newdate = datearray[2]+(datearray[1]<10?('-'+datearray[1]):('-'+datearray[1]))+ (datearray[0]<10?('-'+datearray[0]):('-'+datearray[0])) ;
var newdate = datearray[2]+('-'+datearray[1])+ ('-'+datearray[0]) ;
            document.getElementById("lastDate").value=newdate;   
        }
    });
    if(todos!=null)
    {
        
        localStorage.setItem("todos",JSON.stringify(todos));
   }  
show_todo();
//   let selectedTask=e.parentElement.parentElement.parentElement;
//   let selectedTask=e.parentElement.parentElement;
//   document.getElementById("title").value=selectedTask.children[0].innerHTML;
//   document.getElementById("desc").value=selectedTask.children[1].innerHTML;
//  document.getElementById("lastDate")=selectedTask.children[2].innerHTML;
// selectedTask.remove();
// selectedTask.parentElement.style.display="none";
// localStorage.setItem("todos", JSON.stringify(todos));
// selectedTask.parentElement.style.display="block";
};
// let resetForm=()=>{
//     document.getElementById("title").value="";
//   document.getElementById("desc").value="";
//  document.getElementById("lastDate").value="";
// }
    // check if task is empty
    // todos.map((todo,index)=>{
    //     if((todo.id==e.parentElement.parentElement.parentElement.id)){
    //     console.log("we are in edit todo  " +todo[index]+"     "+e.parentElement.parentElement.parentElement);
    //     // todos[index].id=e.parentElement.parentElement.parentElement.id;
    //     // todos[index].title=e.parentElement.parentElement.parentElement.todo.title;
    //     // todos[index].desc=e.parentElement.parentElement.parentElement.todo.desc;
    //     // e=currentTodo;

    //    todos[index].title=title.value;
    //    todos[index].desc=desc.value;
    //    todos[index].lastDate=lastDate;
    // }
    // });
    
    // task already exist
    // todos.forEach(todo => {
    //   if (todo.value === e.value) {
    //     alert("Task already exist!");
    //     e.value = currentTodo;
    //     return;
    //   }
    // });
    // // update task
    // todos.forEach(todo => {
    //   if (todo.value === currentTodo) {
    //     todo.value = e.value;
    //   }
    // });

//     Updating Items in the To-Do List
// Each to-do list item has an edit button, just like the delete button. The edit button has an attribute method onclick(). On clicking the button, the edit method gets executed and passes the index as the parameter.

// There are two HTML elements whose display properties are set to none:

// Input element with id saveIndex
// Button with the id save-task-btn
// As soon as you click on the edit button, the input will have the text value that you want to update with. The saveTaskButton will be displayed instead of addTaskButton.

// The HTML code consists of an input element with id saveIndex. You have to set its default style property of display as none. When the edit method is called, you set the value attribute of this element to the id, so you can reference it later when saving the updated task.

// function edit(ind) {
//  saveInd.value = ind;
//  let todo = localStorage.getItem("todo");
//  todoArray = JSON.parse(todo);
//  text.value = todoArray[ind];
//  addTaskButton.style.display = "none";
//  saveTaskButton.style.display = "block";
// }

// Once you are done editing the text, you click on the saveTaskButton. On clicking the button, you retrieve the id of the text using the saveInd input. After retrieving the id, you can update the todoArray at that index and push the changes to the localStorage. Finally, we called the displayTodo() function to reflect changes on the web page.

// saveTaskButton.addEventListener("click", () => {
//  let todo = localStorage.getItem("todo");
//  todoArray = JSON.parse(todo);
//  let id = saveInd.value;
//  todoArray[id] = text.value;
//  addTaskButton.style.display = "block";
//  saveTaskButton.style.display = "none";
//  text.value = "";
//  localStorage.setItem("todo", JSON.stringify(todoArray));
//  displayTodo();
// });

// <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name="text" id="text" placeholder="Add Todo" />
// <input type="hidden" id="saveIndex" />
// <button class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded text-white bg-indigo-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1" id="add-task-btn">Add</button>
// <button class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded bg-indigo-600 text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1" style="display: none" id="save-todo-btn">Edit Todo</button>
// </div>

    // update local storage
//     localStorage.setItem("todos", JSON.stringify(todos));
// };

// const deleteitem=document.getElementById("delete");
// deleteitem.addEventListener("click",function deleteTodo(index){

    var updatedcontent="";
    let completeTodo=(e)=>{
        console.log(e.id);
        todos=JSON.parse(localStorage.getItem("todos"));
        debugger;
        todos.map(todo => {
            if (todo.id== e.parentElement.parentElement.id) {
                
                // todo.iscompleted = !todo.iscompleted;
               // todo.iscompleted=true;
                // if(document.getElementById(e.id).getElementsByClassName('fa fa-check').length>0){
                if(document.getElementById(e.parentElement.id).classList.contains("completedmark")==true){
                    // document.getElementById(e.id).classList.remove('fa','fa-check');
                    document.getElementById(e.parentElement.id).classList.remove("completedmark",'checkmark');
                    todo.iscompleted=false;
                }
                else{todo.iscompleted=true;}
                //  todo.iscompleted = todo.iscompleted ? "fa fa-check fa-2x" : "";
                // const checked = todo.iscompleted ?  null : "fa fa-check fa-2x";
                // localStorage.setItem("todos", JSON.stringify(todos));
                if(todo.iscompleted==true){
                    // var newSpan = document.createElement('span');
                    // newSpan.style.color="green";
                    // newSpan.setAttribute("class", "fa fa-check ");
                    // newSpan.setAttribute("")
                    document.getElementById(e.parentElement.id).classList.add("completedmark","checkmark");
                    // document.getElementById(e.id).appendChild(newSpan);
                    console.log(e);
                }
                else{
                    // if(document.getElementById(e.id).getElementsByClassName('checkmark ').length>0){
                    if(document.getElementById(e.parentElement.id).classList.contains("completedmark")==true){
                    // document.getElementById(e.id).getElementsByClassName('fa fa-check ')[0].remove()
                    document.getElementById(e.parentElement.id).classList.remove("completedmark","checkmark");
                    }
                    // newSpan.setAttribute("class", "fa-regular fa-square-check");
                    console.log(e);
                    } 
                }
                
                //     var checked=document.getElementById(e.id).getElementsByClassName('fa fa-check fa-2x');
                
                // if(checked.length===0){
                    //     var newSpan = document.createElement('span');
                    //     // newSpan.style.color="green";
                    //     document.getElementById(e.id).appendChild(newSpan);
                    //     newSpan.setAttribute("class", "fa fa-check fa-2x");
                    //     document.getElementById(e.id).classList.add("checkmark");
                    //     console.log(e);
                    // }
                    // else{
                        //     document.getElementById(e.id).getElementsByClassName('fa fa-check fa-2x')[0].remove()
                        //     document.getElementById(e.id).classList.remove("checkmark");
                        //     // newSpan.setAttribute("class", "fa-regular fa-square-check");
                        //     console.log(e);
                        
                        // }
                        // var checked=document.getElementById(e.id).getElementsByClassName('fa fa-check fa-2x');
                        
                        //     todos=JSON.parse(localStorage.getItem("todos"));
                        // todos.map(todo => {
                            // const iscompleted=todo.iscompleted ? "fa fa-check fa-2x" : null;
                            
                            
                            // });
                            
                             ///todos=JSON.parse(localStorage.getItem("todos"));
                             if(todos!=null)
                             {
                                 
                                 localStorage.setItem("todos",JSON.stringify(todos));
                            }
        //                     for(let todo of todos.reverse()){
                                
                                
        //                         updatedcontent+=`
                                
        //                         <div class="card mt-2 text-primary" id=${todo.id} >
        //                         <div class="card-body ${todo.iscompleted}"  id=${todo.id+'test'} onclick="completeTodo(this)">
        //                         <h3>${todo.title} 
        //                         ${todo.date}</h3>
        //                         <p>${todo.desc}</p>
                                
                                
        //                         <div class="close"> 
        //                         <i class="fa fa-trash fa-2x " onclick="deleteTodo(this)"></i>
        //                         </div>
        //                         </div>
        //                         </div>
        //                         `;
                                
        //                         if(todo===e){
        //                             document.getElementById("show-item").innerHTML=updatedcontent;
        //                             localStorage.setItem("todos", updatedcontent);
        //                         }
            
        // };
            // console.log(todos)
           
        });
            // show_todo();
        
        
    // newSpan.innerHTML='<i class="fa-regular fa-square-check"></i>';
    //  newSpan.setAttribute("class", "checked");
    
    // document.getElementById(e.id).classList.toggle("checkmark");


    // if(document.getElementById(e.id).classList.contains("checkmark")){
    //     document.getElementById(e.id).classList.remove("checkmark");
    //     console.log( document.getElementById(e.id));
    // }
    // else{
        //        document.getElementById(e.id).classList.add("checkmark");
        //        console.log( document.getElementById(e.id));
    //    }
    //   e.setAttribute("class", "checked");
    // show_todo();
 
                    };
                


let deleteTodo=(e)=>{
    console.log(e.parentElement.parentElement.parentElement.id);
    // e.parentElement.parentElement.parentElement.classList.toggle("checked");
     todos=JSON.parse(localStorage.getItem("todos"));
     console.log(todos);
     todos.map((todo,index) => {
         if(todos[index].id==e.parentElement.parentElement.parentElement.id){
             //  todos.splice(e.parentElement.parentElement.parentElement.id,1);
             
             todos.splice(index,1);
             console.log(todos);
            }
        });
        // console.log(todos[i]);
        // for(let todo of todos){
            //     let {title,desc,id}=todo;
            //     if(todo[i]===id){
                //     console.log(id);
                //     }
                // }
                // e.parentElement.parentElement.parentElement.remove();
                // todos.forEach(todo => {
                    //     if(todo.id===this.index){
                        //         todos.splice(index,1);
                        //     }
                        // });


    localStorage.setItem("todos",JSON.stringify(todos));
show_todo();


};
// function deleteTodo(id){
    
//     let todos=JSON.parse(localStorage.getItem("todos"));
//     console.log(todos);
    // todoarray.map(id=>todoarray.splice(id,1));---------------->//splice on item but first item not required one
    // console.log(index);
//     todos=localTodostring;
//     todos.splice(index,1);

// todo is iterator index--just to know the index of iterator & this is callback function
// todoarray.forEach(function(todo,index){
//     // if our deleteTodo id =current iteration or item id then we gone a splice 1 out from whatever the indexes with index and replace it with updated list as deleteTodo todo array list 
//     if(todo.id){
//         todoarray.splice(index,1);

//     }
// });
// todoarray.map(todo=>{
//     todos.forEach(todo => {
//         // if(todo.id==!this.id){
//         //     console.log("spliced");
//         //     todos.splice(todo.id,1);
//         // }
//        let index= function(id){

//         return todo.id==this.id;
//         console.log("index block")
//         }
    
// console.log(index);
//         console.log(todo);
      
//     });


// for(let todo of todos){
    
// console.log(todo.id===id);




// }

//    let  index = todos.map(x=>{
//        return x.id;
//    }).indexOf(todos);

//     todos.splice(index,1);
    
// });
   
// localStorage.setItem("todos",JSON.stringify(todos));
// show_todo();
// }
//     console.log(localTodostring);
   
 //deletes item from localStorage
//  var key = document.getElementById('removeKey').value;
//  localStorage.removeItem(key)
//  console.log("remove items");   
    
    
    
// //  localTodostring.splice(localTodostring.indexOf(todo),1);
//      // let itemShow =document.getElementById("show-item");
// // let divContentob=document.getElementById("divContent");
// // itemShow.removeChild(divContentob);
// // itemShow.remove();
//  }
// show_todo();

//clear all Tasks
const clearAllToDos=()=>{
    // let clearTasks=document.getElementById("clearTasks");
    localStorage.clear();
    show_todo();

};
