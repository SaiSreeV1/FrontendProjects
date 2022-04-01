// Implement the JavaScript code so that when you hover your mouse over a colored ball, it gets bigger.

console.log("Hello ");
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var tx=window.innerWidth;
var ty=window.innerHeight;
canvas.width=tx;
canvas.height=ty;
c.lineWidth= 5;
// current line width in pixels
c.globalAlpha = 0.5;
// sets or returns the current alpha or transparency value of the drawing number between 0.0 (fully transparent) and 1.0 (no transparancy)

