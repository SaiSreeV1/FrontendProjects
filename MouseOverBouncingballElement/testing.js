var canvas=document.getElementById('canvas');
var width=window.innerWidth;

var height=window.innerHeight;
canvas.width=width;

canvas.height=height;
var c=canvas.getContext('2d');
// x,y are coordinates of circle and vx,vy are respective speeds
var x=Math.floor(Math.random()* innerWidth);
var y=Math.floor(Math.random()*innerHeight);
var vx=Math.floor(Math.random()*4);
var vy=Math.floor(Math.random()*8);
var radius= 20;

move();
// function will do the animation
function move(){
  
requestAnimationFrame(move);

// It clears the specified pixels within the given rectangle
c.clearRect(0,0,innerWidth,innerHeight);

// Creating a circle
c.beginPath();
// c.strokeStyle='rgba(0, 0, 0 ,0.25)';
c.arc(x,y,radius,0,2*Math.PI,true);

// c.stroke();
c.fillStyle='rgba(0, 0, 0 ,0.25)';

c.fill();



// Conditions so that the ball bounces
                // from the edges
                if (radius + x > innerWidth)
                   vx = 0 -vx;
                    if (x - radius < 0)
                    vx = 0 - vx;
                    if (radius + y > innerHeight)
                    vy = 0 - vy;
                    if (y - radius < 0)
                    vy= 0 - vy;
 //for moving the circle                   
x=x+vx;

y=y+vy;
}


function randomColor() {
        return (
          "rgba(" +
          Math.round(Math.random() * 250) +
          "," +
          Math.round(Math.random() * 250) +
          "," +
          Math.round(Math.random() * 250) +
          "," +
          Math.ceil(Math.random() * 10) / 10 +')" '
          );
        }

       