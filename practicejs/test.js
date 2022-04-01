
console.log("hello");
console.warn("hi warn");
console.error("hi error");
console.info("hi info");
console.time("hi time");
// not working becoz wrong method

let nam=prompt("enter name");
alert(nam);
let choice=confirm("are u want to do ?");
if (choice==false) {
    location.href="http://google.com";

}
else
alert("choice"+choice);
let student={
    name:"susi",
    address:"delhi",
    phone:"123567790"
    
};
alert("student table");
console.table(student);//not working in chrome
console.time();
setTimeout(function(){
    
    //console.clear();
},20000);
console.timeEnd();
// console.time();
// for (let i = 0; i < 500; i++) {
    
    
// }
// console.timeEnd();






//Datatypes
console.log("Welcome to Datatypes");
//Primitive d.t
var a=50;
console.log(typeof a);
let marks=1234.56;
console.log(typeof marks);
let uname="saisree";
console.log(typeof uname);

let isGood=true;
console.log(typeof isGood);
let character='c';
console.log(typeof character);
var undef;
console.log(typeof undef);
var nullvalue=null;
console.log(typeof nullvalue);

//Reference d.t
let names=["firstname","secondname","3rdname"];
console.log("array type "+typeof names);

let x=23;
let y=23;
console.log(x==y);
let xa=[23];
let ya=[23];
console.log(xa==ya);
console.log(typeof xa);

let student1={
name:"lucy",
address:"japan"


};
console.log(student1);
console.log("Object type "+typeof student1);
let d=new Date();
console.log(d);
console.log("date datatype "+typeof d);
//String Interpolation
let about=`new 
information not 
yet given`;
console.log(about);
let e=12;
let f=12;
console.log(`sum of ${e} and ${f} is ${e+f+1}`);








