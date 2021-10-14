/*
The Game Project 7

There are a lot of new things I have learned so far from this final game project especially working on the platforms, enemies, sound, and Images, 
and the fact that, you have to read your code to know where to put a sound file.

In order to make the game more exciting and vivid, I used Super Mario images and sounds from the Internet, 
and I decided to go to rainy days and sunny days with colorful skies.

I wanted to move my platform back and forth when the character comes in contact. 
I had my platform moving, but I couldn't find a way to make my character move in the same direction. 

Also, I wanted to use Koopas (Mario) image as my enemy, but I realized I couldn't use the constructor to make the enemy turn back and forth, 
so I picked goombas as the better alternative.
*/

var mode;
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var collectables;
var clouds;
var mountains;
var canyons;
var platforms;
var enemies;
var rain;
var isRaining = true;

var flagpole;
var castle;
var lives;
var game_score = 0;
let red = 0;
let green = 0;
let blue = 0;

var collectableSound;
var levelComplete;
var gameOver;
var bgMusic;
var lostLive;
var jumpSound;

var dollarCollectableImg;
var treeImg;
var gameOverImg;
var levelCompleteBg;
var livesHeartImg;
var castleImg;
var houseFlagImg;
var platformPadImg;
var groundFloorImg;
var fonts;
var fonts2;

var gameCharStandImg;
var gameCharRightImg;
var gameCharRightImg3;
var gameCharLeft3Img;
var gameCharLeft1Img;
var gameCharRightJumpImg;
var gameCharLeftJumpImg;
var gameCharIsFallingImg;
var enemyImg;


function preload()
{
    soundFormats('mp3','wav');
    collectableSound = loadSound('assets/winCoin2.wav');
    levelComplete = loadSound('assets/levelComplete.wav');
    gameOver = loadSound('assets/gameOver.wav');
	lostLive = loadSound('assets/lostLife.wav');
	lostSingleLive = loadSound('assets/winCoin.wav');
	bgMusic = loadSound('assets/levelMusic.wav');
	jumpSound = loadSound('assets/jump.wav');
	lostSingleLive.setVolume(0.2);
    gameOver.setVolume(0.2);
    collectableSound.setVolume(0.2);
	jumpSound.setVolume(0.2);
	lostLive.setVolume(0.2);
	levelComplete.setVolume(0.2);
	bgMusic.setVolume(0.1);
	platformPadImg = loadImage('assets/platform.png');
	dollarCollectableImg = loadImage('assets/dollar.png');
	treeImg = loadImage('assets/trees.png');
	gameOverImg = loadImage('assets/template.png');
	levelCompleteBg = loadImage('assets/levelCompleteBg.png');
	livesHeartImg= loadImage('assets/heart.png');
	castleImg = loadImage('assets/house.png');
	houseFlagImg = loadImage('assets/houseFlag.png');
	gameCharStandImg = loadImage('assets/gameCharStand1.png');
	gameCharRightImg = loadImage('assets/gameCharRight1.png');
	gameCharRightImg3 = loadImage('assets/gameCharRight3.png');
	gameCharLeft3Img = loadImage('assets/gameCharLeft3.png');
	gameCharLeft1Img = loadImage('assets/gameCharLeft1.png');
	gameCharRightJumpImg = loadImage('assets/gameCharRightJump.png');
	gameCharLeftJumpImg = loadImage('assets/gameCharLeftJump.png');
	gameCharIsFallingImg = loadImage('assets/gameCharIsFalling.png');
	enemyImg = loadImage('assets/goombas.png');
    groundFloorImg = loadImage('assets/padlo.png');
	fonts = loadFont('assets/LobsterTwo-Regular.ttf');
	fonts2 = loadFont('assets/FrostbiteBossFight-dL0Z.ttf');
}


function setup()
{
	mode = 0;
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
 
	lives = 3;
	startGame();
}


function draw()
{
	clear();
	if(mode == 0)
	{
		gameIntro();
		bgMusic.play();
		bgMusic.loop();
	}

	if(mode == 1)
	{
		//background
		background(204, 198, 187);

		//tokens and Live display
		scoreBoard();	
		
		//draw sun weather
		if(isRaining == false)
		{
			background(red, green++, blue++);
			scoreBoard();

			for(var i=0; i < weather.length; i++)
			{
				weather[i].draw();
			}
		}
		
		push();
		translate(scrollPos, 0); //scrollPos


		//Draw mountains
		drawMountains();

		//Draw clouds
		for(var i = 0; i< clouds.length; i++)
		{
			clouds[i].draw();
		}

		//Draw trees
		drawTrees();

		//Draw grounds
		drawGround();

    	//Draw platforms
    	for(var i=0; i < platforms.length; i++)
    	{
       		platforms[i].draw();
		}

		//Draw canyons.
		for(var i = 0; i < canyons.length; i++)
		{
			drawCanyon(canyons[i]);
			checkCanyon(canyons[i]);
		}

		//draw collectable items.
		for(var i = 0; i < collectables.length; i++)
		{			
			if(collectables[i].isFound == false)
			{
				drawCollectable(collectables[i]);
				checkCollectable(collectables[i]);
			}	
		}

		//Draw Flag Pole
		renderFlagpole();

		//Draw castle
		renderCastle();

		//castleCheck
		checkCastle();

		//current weather
		weatherCheck();

		//Draw enemies
    	for(var i = 0; i< enemies.length; i++)
    	{
        	enemies[i].draw();
			
        	var isContact = enemies[i].checkContact(gameChar_world_x , gameChar_y);
        	if(isContact)
        	{
            	if(lives > 1)
            	{
                	lives -= 1;
					lostSingleLive.play();
				
                	break;
            	}
				if(lives <= 1)
				{
					lives -= 1;
					lostLive.play();
				}
        	}
    	}
		pop();
 
		//Draw game character.

		if(castle.isReached == false )
		{
			drawGameChar();
			checkGameCharacter();
		}

	
		checkPlayerDie();

		// Logic to make the game character move or the background scroll.
    	if(isLeft)
		{
			if(gameChar_x > width * 0.2)
			{
				gameChar_x -= 5;
			}
			else
			{
				scrollPos += 5;
			}
		}

		if(isRight)
		{
			if(gameChar_x < width * 0.8)
			{
				gameChar_x  += 5;
			}
			else
			{
				scrollPos -= 5; 
			}
		}

		// Logic to make the game character rise and fall.
		if(gameChar_y < floorPos_y)
		{
        	for(var i = 0; i< platforms.length; i++)
        	{
				var platformContact = platforms[i].checkContact(gameChar_world_x, gameChar_y) == true;
				if(platformContact)
            	{
					isFalling = false;
					onPlatform = true;
					platforms[i].move();
                	break;
				}
        	}

        	if(platformContact == false)
        	{
            	gameChar_y += 3;
            	isFalling = true; 
        	}
		}
		else 
		{
			isFalling = false;  
		}

    	if(isPlummeting)
    	{
    		gameChar_y += 4;
    	}

		if(flagpole.isReached == false)
		{
			checkFlagpole();
		}

		//Update real position of gameChar for collision detection.
		gameChar_world_x = gameChar_x - scrollPos;
    }
}