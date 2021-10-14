
// ----------------------------------
// Draw Ground functions
// ----------------------------------


//draw ground
function drawGround()
{    
   for(var i = 0; i < grounds.length; i++)
   {
        noStroke();
        fill(128,128,128);
        image(groundFloorImg,grounds[i].x_pos, grounds[i].y_pos, grounds[i].width, grounds[i].height);
   }
}