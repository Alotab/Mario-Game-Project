// ----------------------------------
// game intro function
// ----------------------------------

function gameIntro()
{
	bgMusic.stop();
	textFont(fonts2);
	background(09,87,35);
	fill(255);
	textSize(32);
	text('PRESS ENTER TO START THE GAME',width/2- 240, height/2);
	fill(255, 0, 0);
	textFont(fonts2, [100]);
	text('R', width/2- 70, height/2 -78);
	fill(255);
	textFont(fonts,[12]);
	text('Warning! Do not Enter this game if you are not a student of Goldsmiths, University of London.', width/2 -180, height/2 + 270);

	fill(198, 119, 40);
	textFont(fonts2,[16]);
	text('How To Play: ', width/2-300, height/2 +80);
	text('Use the  Arrow  Keys to Move Left and Right .', width/2-300, height/2 + 130);
	text(' Press Space Bar   to Jump.', width/2-300, height/2 + 150);
	text('You are on a hunt for  money bags.', width/2-300, height/2 + 170);
	text('Gather  as many bags as you can. Good Luck .', width/2-300, height/2 + 190)

	stroke(255);
    strokeWeight(7);
	noFill();
	ellipse(width/2-50, height/2 - 100, 130,130);
	noStroke();
	strokeWeight(1);
}
