
// ----------------------------------
// renderFlagpole and checkFlagpole functions
// ----------------------------------

//function to draw and Check Flagpole
function renderFlagpole()
{
	push();
	strokeWeight(5);
	stroke(220, 20, 60);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
	noStroke();

	if(flagpole.isReached)
	{
		fill(199,21,133);
		rect(flagpole.x_pos,floorPos_y - 250, 40, 30);
	}
	else
	{
		fill(199,21,133);
		rect(flagpole.x_pos,floorPos_y-30, 40, 30);
	}
	pop();
}


function checkFlagpole()
{
	var d = abs(gameChar_world_x - flagpole.x_pos);

	if (d < 15)
	{
		flagpole.isReached = true;
		levelComplete.play();
	}
}
