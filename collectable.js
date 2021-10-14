
// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.
function drawCollectable(t_collectable)
{
	image(dollarCollectableImg, 
		t_collectable.x_pos,
		t_collectable.y_pos - 20,
		t_collectable.size -20, 
		t_collectable.size - 15);
}

// Function to check character has collected an item.
function checkCollectable(t_collectable)
{
	if(dist(
		gameChar_world_x, 
		gameChar_y, 
		t_collectable.x_pos, 
		t_collectable.y_pos) < 20)
	{
	  	t_collectable.isFound = true;
		collectableSound.play();
	  
	 	 game_score += 100;
  	}
}