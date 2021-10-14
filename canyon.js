
// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.
function drawCanyon(t_canyon)
{
	for(var i = 0; i < canyons.length; i++)
	{
		fill(68,187,255);
		rect(t_canyon.x_pos, t_canyon.y_pos, t_canyon.width , t_canyon.height);
	}
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon)
{
	if(gameChar_world_x > t_canyon.x_pos && 
		gameChar_world_x < t_canyon.x_pos +
		t_canyon.width && gameChar_y >= floorPos_y) 
	    {
		    isPlummeting = true;
	    }

	if(isPlummeting == true )
	{
		gameChar_y += 1;
		gameChar_world_x = 0;
	}
}
