const c = document.getElementById("fractal");
const ctx = c.getContext("2d");
let x = c.width/2;
let y = c.height/2;
let length = 500;
let depth = 6;

drawHTree(x,y,length,depth);

function drawHTree(startX, startY, length, depth) {
   
  if(depth <= 1) {
    return;
  }
  
  let halfDist = length/2;
  let halfHeight = (halfDist*.999 + 0.5<<0)/2;
  let left = startX - halfDist;
  let right = startX + halfDist;
  let top = startY - halfHeight;
  let bottom = startY + halfHeight;
  
  ctx.beginPath();
  ctx.save();

  // Horizontal
  ctx.moveTo(left, startY);
  ctx.lineTo(right, startY);
  
  // Left Vert
  ctx.moveTo(left, top);
  ctx.lineTo(left, bottom);
  
  // Right Vert
  ctx.moveTo(right, top);
  ctx.lineTo(right, bottom);
  
  ctx.stroke();
  
  // Recursively draw tree
  drawHTree(left, top, length*0.5, depth - 1);
  drawHTree(left, bottom, length*0.5, depth - 1);
  drawHTree(right, bottom, length*0.5, depth - 1);
  drawHTree(right, top, length*0.5, depth - 1);
}