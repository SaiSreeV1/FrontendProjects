    // // Implement the JavaScript code so that when you hover your mouse over a colored ball, it gets bigger.
     // console.log("Hello ");
    // // get the canvas element
    // var canvas=document.getElementById('canvas');
    var canvas=document.getElementById('canvas');
    
    // // gets the width and height of browser viewport
    // var tx=window.innerWidth;
    // var ty=window.innerHeight;
    var width=window.innerWidth;
    var height=window.innerHeight;
    // // set the width and height of canvas equal to viewport
    // canvas.width=tx;
    // canvas.height=ty
    canvas.width=width;
    canvas.height=height;
    // call the getContext method to draw 2d shape
    var c=canvas.getContext('2d');


    // another type--->create a ball class
    class Ball{
      
constructor(x,y,velx,vely,size,color){
  this.x=x;//horizontal position of the ball
  this.y=y;//vertical position of the ball
this.velx=velx; 
// velocity x added to coordinate x when we animate our ball
this.vely=vely; 
// velocity y added to coordinate y when we animate our ball
this.size=size; 
// size is radius of the ball
this.color=color;
// fill ball with given color

}
   


// create draw ball func
drawBall(){
  c.beginPath();//start drawing
  c.clearRect(0, 0, width, height);
  c.fillStyle=this.color;//fill ball shape with given color
  //x,y is center of the ball
  //size id radius of the ball
  //0 is a start point of degree around radius of the ball
  //2*Math.PI is an end point which is equivalent to 360 degree
  c.arc(this.x,this.y,this.size,0,2 * Math.PI);
  c.fill();//finish drawing
}

//create update func
updateBall(){
//if x and y position is greater than or less than browser viewport then balls turn another direction
if(this.x+this.size>=width ||this.x - this.size<=0){
  this.velx=-this.velx;

}
if(this.y+this.size>=height ||this.y - this.size<=0){
  this.vely=-this.vely;
  
}
//x and y velocity added to added to x and y coordinate everytime updateBall func is called
this.x+=this.velx;
this.y += this.vely;

}

}
//create random number generator func
function random(min,max){
  const num=Math.floor(Math.random()*(max-min+1))+min;
  return num; 
}
//create some balls and store in an array 
const balls=[];
while(balls.length<25){
let size=random(10,20);


  //create a new instance of Ball class
  //Now replace static number with random number
  // const ball =new Ball(50,100,5,5 ,20, 'rgb(0, 255, 0)');
  const ball =new Ball(random(size,width-size),random(size,height-size),random
  (-5,5),random(-5,5),size,'rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})'
  );

  balls.push(ball);
}

//create loop func
function loop(){
  //cover the previous frame's drawing before the next one is drawn
  // c.fillStyle='rgba(0, 0, 0 ,0.25)';
  // c.fillStyle='rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})';
  c.fillStyle=randomColor();
  
  c.fillRect(0, 0, width,height);
  //run necessary func
  for (let i = 0; i < balls.length; i++) {
    balls[i].drawBall();
    balls[i].updateBall();
    
  }
  //lets calls loop func itself over and over again and make animation smooth
  requestAnimationFrame(loop);
}
//finally call the loop func once at start
loop();


//     // c.lineWidth= 5;
//     // current line width in pixels
//     // c.globalAlpha = 0.5;
//     // sets or returns the current alpha or transparency value of the drawing number between 0.0 (fully transparent) and 1.0 (no transparancy)
// debugger;
// var mousex=0;
// // store the current horizontal position of the mouse, relative to (0, 0) of the canvas
// var mousey=0;
// // store the current vertical position of the mouse, relative to (0, 0) of the canvas
// addEventListener('mousemove', function(){
//     mousex=event.clientX;
//     mousey=event.clientY;
//     // clientX & clientY property returns the horizontal & vertical coordinate (according to the client area) of the mouse pointer when a mouse event was triggered   event.clientX is syntax

// });
// // addEventListener(event,function,capture)  capture default false i.e in bubbling phase not capturing phase
// var grav=0.99;
// c.strokeWidth=5;

// // Math.random() always returns a number lower than 1.

// // Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both ncluded)

function randomColor() {
    return (
      "rgba(" +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.ceil(Math.random() * 10) / 10 +
    //   ceil() rounds a number UPWARDS to the nearest integer
      ")"
    );
  }
  
// // create a ball
// function Ball(){
//     this.color=randomColor();
//     this.radius=Math.random()*20 +15;
//     // set radius 0 to 0.99 *20--=19.56... +14---=33.334...size of circle
//     this.startradius=this.radius;
   
//         this.x = Math.random() * (tx - this.radius * 2) + this.radius;
//         console.log(this.x);
        
//         this.y = Math.random() * (ty - this.radius);
//         console.log(this.y);

//         this.dy = Math.random() * 2;
//         console.log(this.dy);
//         this.dx = Math.round((Math.random() - 0.5) * 10);
//         console.log(this.dx);

//         this.vel = Math.random() /5;
//         // velocity of ball bouncing set any value
//         this.update = function() {
//           c.beginPath();
//           c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//           console.log(c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI));
//           c.fillStyle = this.color;
//           c.fill();
//           //c.stroke();
//         };
//       };
//       var bal = [];
// for (var i=0; i<50; i++){
//     bal.push(new Ball());
//     console.log(bal.push(new Ball()));
// }

// function animate() {    
//     if (tx != window.innerWidth || ty != window.innerHeight) {
//       tx = window.innerWidth;
//       ty = window.innerHeight;
//       canvas.width = tx;
//       canvas.height = ty;
//     }
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, tx, ty);
//     for (var i = 0; i < bal.length; i++) {
//         bal[i].update();
//         bal[i].y += bal[i].dy;
//         bal[i].x += bal[i].dx;
//         if (bal[i].y + bal[i].radius >= ty) {
//           bal[i].dy = -bal[i].dy * grav;
//         } else {
//           bal[i].dy += bal[i].vel;
//         }    
//         if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
//             bal[i].dx = -bal[i].dx;
//         }
//         if(mousex > bal[i].x - 20 && 
//           mousex < bal[i].x + 20 &&
//           mousey > bal[i].y -50 &&
//           mousey < bal[i].y +50 &&
//           bal[i].radius < 70){
//             //bal[i].x += +1;
//             bal[i].radius +=5;
//             console.log(bal[i].radius +=5); 

//           } else {
//             if(bal[i].radius > bal[i].startradius){
//               bal[i].radius += -5;
//               console.log(bal[i].radius += -5);
//             }
//           }
          
//         //forloop end
//         }
//     //animation end
//     }
    
//     animate();
    
//     setInterval(function() {
//       bal.push(new Ball());
//       bal.splice(0, 1);
//       console.log(bal.splice(0, 1));
//     }, 400);
    


