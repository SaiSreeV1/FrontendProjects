  console.log("Hello World");

  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  var width = window.innerWidth;
  var height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  //c.lineWidth= 5;
  //c.globalAlpha = 0.5;

  var mousex = 0;
  var mousey = 0;

  addEventListener("mousemove", function() {
    mousex = event.clientX;
    mousey = event.clientY;
  });


  var grav = 0.99;
  c.strokeWidth=5;
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
      ")"
    );
  }

  function Ball() {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (width - this.radius * 2) + this.radius;
    this.y = Math.random() * (height - this.radius);
    this.vy = Math.random() * 2;
    this.vx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() /5;
    this.update = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fillStyle = this.color;
      c.fill();
      //c.stroke();
    };
  }

  var bal = [];
  for (var i=0; i<50; i++){
      bal.push(new Ball());
      console.log(bal);
  }

  function animate() {    
    if (width != window.innerWidth || height != window.innerHeight) {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    


  requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for (var i = 0; i < bal.length; i++) {
      bal[i].update();
      bal[i].y += bal[i].vy;
      bal[i].x += bal[i].vx;
      if (bal[i].y + bal[i].radius >= height) {
        bal[i].vy = -bal[i].vy * grav;
      } else {
        bal[i].vy += bal[i].vel;
      }    
      if(bal[i].x + bal[i].radius > width || bal[i].x - bal[i].radius < 0){
          bal[i].vx = -bal[i].vx;
      }
    if(mousex > bal[i].x - 20 && 
        mousex < bal[i].x + 20 &&
        mousey > bal[i].y -50 &&
        mousey < bal[i].y +50 &&
        bal[i].radius < 70){
          bal[i].x += +1;
          bal[i].radius +=5; 
        }  else {
          if(bal[i].radius > bal[i].startradius){
            bal[i].radius += -5;
          } 
        }
        
      //forloop end
      }
  //animation end
  
  }
  animate();

    
  setInterval(function() {
    bal.push(new Ball());
    bal.splice(0, 1);
  }, 400); 

  
