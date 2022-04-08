var canvas=document.getElementById('canvas');
var width=window.innerWidth;

var height=window.innerHeight;
canvas.width=width;

canvas.height=height;
var c=canvas.getContext('2d');


class Ball{
   
constructor(x,y,vx,vy,radius,color){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.radius=radius;
    this.color=color;
    
}


// create a ball
drawBall(){

this.color=randomColor()
c.beginPath();
c.arc(this.x,this.y,this.radius,0,2*Math.PI);
c.fillStyle=this.color;
c.fill();

}
updateBall(){
    
    this.x+=this.vx;
    this.y += this.vy; 

    if(this.x+this.radius>=width||this.x-this.radius<=0){
        this.vx= -this.vx;
    }
    if(this.y+this.radius>=height||this.y-this.radius<=0){
        this.vy= -this.vy;
    }
    
}


}
// const ball =new Ball(50,100,5,5 ,20, 'rgb(0, 255, 0)');
 const balls=[];
while(balls.length<25){
let radius=random(10,20);
// const ball =new Ball(50,100,5,5 ,20,randomColor());
/* const ball=new Ball(random(radius,width-radius),random(radius,height-radius),random
  (-5,5),random(-5,5),radius,Math.round(Math.random()*255), Math.round(Math.random()*255), Math.round(Math.random()*255));
  */ 

  const ball=new Ball(random(radius,width-radius),random(radius,height-radius),random
  (-5,5),random(-5,5),radius,randomColor(),randomColor(),randomColor());
 
  balls.push(ball);
  console.log(balls);
  
}
 function random(min,max){
    const num=Math.floor(Math.random()*(max-min+1)+min);
    return num;
}



call();
function call(){
// const ball=new Ball(50,100,5,5,20,'green');
/* const ball=new Ball(random(radius,width-radius),random(radius,height-radius),random
  (-5,5),random(-5,5),radius,'rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})'
  );
  */
//   c.fillStyle='rgba(207, 236, 241,0.25)';
c.clearRect(0, 0, width, height);
//   c.fillRect(0, 0, width,height);
 
  
  for (let i = 0; i < balls.length; i++) {
     balls[i].drawBall();
      balls[i].updateBall();
      

      
  }
requestAnimationFrame(call);

}
function randomColor(){
    return ("rgb("+Math.round(Math.random()*250)+" , "+Math.round(Math.random()*250)+" , "+Math.round(Math.random()*250)+" , "+Math.ceil(Math.random()*10)/10+" ) "
    );
}

