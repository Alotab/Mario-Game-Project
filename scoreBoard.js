
// ----------------------------------
// check scores and check lives functions
// ----------------------------------

//function to check game Scores and lives
function scoreBoard()
{
	noFill();
	noStroke();
	fill(236, 60, 0);
	textFont(fonts2, [15]);
	text("Money : $ " + game_score,40, 20);
	text("Lives : ", 900, 20);
}

//function to draw heart Image for the lives
function checkLives()
{
	for(var i = 0; i < lives; i++)
	{
		image(livesHeartImg, 936 + (i * 20),6,15,15);
	}
}