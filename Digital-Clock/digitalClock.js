// upto sec only
const getTime=()=>{
    let d =new Date();
    let h=d.getHours();
    let amPm= h >= 12 ? 'PM' : 'AM' ;
    h=h%12;
    h=h==0? 12 : h;
    let m=d.getMinutes();
    m=m>9? m : "0" +m;
    let s=d.getSeconds();
    s= s>9 ? s: "0" +s;
    let ms=d.getMilliseconds();

    // let ms=d.getMilliseconds();
   
    // return `${h}:${m}:${s}:${ms}`;
    return `${h} : ${m} : ${s} : ${ms}  ${amPm}`;
      // inbuilt methods directly to display time
    //return d.toString();    // OR
    // return d.toDateString();    // OR
    // return d.toJSON();    // OR
    // return d.toLocaleTimeString();    // OR and ...
    

};
// console.log(getTime());
//setInterval(getTime(),1000); //not working correctly
setInterval(()=>{   // only upto minutes
    // console.log(getTime());
let digiClock=document.querySelector('.clock');

digiClock.innerHTML=getTime();
},1000);
// set setInterval calls on every half sec= 500ms and 1ms
// digiClock.innerHTML=getTime();
//  },500);
//   digiClock.innerHTML=getTime();
//  },1);

/* const months=["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const weeks=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function clock(){
let d =new Date();

// let date=`${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}`;

// let fullDate=document.getElementById('full-date');
// console.log(fullDate);

let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let meridian="AM";
let weekname=weeks[d.getDay()];

let ms=d.getMilliseconds();
console.log(ms);

if(h==0)
h=12;
if(h>12){
    h=h-12;
    meridian="PM";

}
h=(h<10)?`0${h}`:h;
console.log(h);
m=(m<10)?`0${m }`: m;
console.log(m);
s=(s<10)?`0${s}` :s;
console.log(s);

let time=`${weeks[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} \n ${h}: ${m} : ${s} : ${ms}  : ${meridian}`;
// let time=`${date} \n ${h}: ${m} : ${s}  ${meridian}`;
// let time=`${h}: ${m} : ${s}  ${meridian}`;


console.log(time);
setInterval(clock,1);
let spanob=document.querySelector('.clock');
// // fullDate.innerHTML=date;
spanob.innerText=time;
// spanob.innerHTML=time;

}

clock();
 */