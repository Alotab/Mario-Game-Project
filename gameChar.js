/*
	Functions to draw Game Character, check player die, and check game Character.
*/

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	if(isLeft && isFalling)
	{
		image(gameCharLeftJumpImg, gameChar_x-15, gameChar_y-40, 40, 40);
	}
	else if(isRight && isFalling)
	{
		image(gameCharRightJumpImg, gameChar_x-15, gameChar_y-40, 40, 40);
	}
	else if(isLeft)
	{
		image(gameCharLeft3Img, gameChar_x-15, gameChar_y-40, 40, 40);
		image(gameCharLeft1Img, gameChar_x-15, gameChar_y-40, 40, 40);
	}
	else if(isRight)
	{
		image(gameCharRightImg, gameChar_x-15, gameChar_y-40, 40, 40);
		image(gameCharRightImg3, gameChar_x-15, gameChar_y-40, 40, 40);
	}
	else if(isFalling || isPlummeting)
	{
		image(gameCharIsFallingImg, gameChar_x-15, gameChar_y-40, 40, 40);
	}
	else
	{
		image(gameCharStandImg, gameChar_x-15, gameChar_y-38, 40, 40);
	}
}


// ----------------------------------
// check player die function
// ----------------------------------

function checkPlayerDie()
{
	for(var i = 0; i < lives; i++)
	{
		checkLives();
		if(castle.isReached == true) 
		{
			image(levelCompleteBg, 170, 200, width - 400, height-400);
			bgMusic.stop();
			isRaining = false;
			isRight = false;
			isLeft = false;
            jumpSound.stop();
			return;	
		}	

        if(flagpole.isReached == true)
        {
            gameChar_x += 1;
        }
	}
	
	if(lives < 1)
	{
		bgMusic.stop();
		image(gameOverImg, 170, 200, width - 400, height-400);
		isRight = false;
		isLeft = false;
		gameChar_y += 4;
	
		if(keyCode == 32 || key == " " && lives == 0)
		{
			lives = 3;
			startGame();
			bgMusic.play();
			game_score = 0;
		}
		return;
	}

	if(gameChar_y > height) 
	{
		lives -= 1;
		lostLive.play();
		isFalling = true;
		gameChar_y += 1; 
		
		if(lives >= 1 )
		{	
			startGame();	
		}
	}	
}


//function to check game character restriction

function checkGameCharacter()
{
	if(gameChar_world_x <= 200)
	{
		isLeft = false;
	}
}