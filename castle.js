
// ----------------------------------
// renderCastle and checkCastle functions
// ----------------------------------

//function to draw and check Castle
function renderCastle()
{
	push();
	image(castleImg, castle.x_pos, floorPos_y - 300, 200, 300); 

	if(castle.isReached)
	{
        image(houseFlagImg, castle.x_pos + 70, floorPos_y - 340, 40, 40)
	}
	pop();
}


//function to check character is inside the Castle
function checkCastle()
{
	var castleDoor = castle.x_pos + 80;
	var d = abs(gameChar_world_x - castleDoor); 
	if (d < 5)
	{
		castle.isReached = true;
	}
}
