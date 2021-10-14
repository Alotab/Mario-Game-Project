
// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
	if(keyCode == 37 || key == "A")
	{
		isLeft = true;
	}
	else if(keyCode == 39  || key == "D")
	{
		isRight = true;
	}
    else if(keyCode == 32 || key == " ")
	{
		if(isFalling == false)
		{
			gameChar_y -= 120;
			jumpSound.play();
		}
	} 
	else if(keyCode === ENTER || key === ENTER)
	{
		mode = 1;
	}
}

function keyReleased()
{
	if(keyCode == 37)
	{
		isLeft = false;
	}
	else if (keyCode == 39)
	{
		isRight = false;
	}
}

function mousePressed()
{
	if(castle.isReached == true) 
	{
		startGame();
		isRaining = true;
		game_score = 0;
		bgMusic.play();
	}
}
