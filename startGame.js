
// startGame function

function startGame()
{
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	
	// Initialise arrays of scenery objects.
	trees_x = [ 300,400, 1300, 1200, 1600, 2150, 2500];  

	collectables = [
		{x_pos: 300, y_pos: 421, size: 50, isFound: false },
		{x_pos: 370, y_pos: 250, size: 50, isFound: false},
		{x_pos: 490, y_pos: 200, size: 50, isFound: false},

        {x_pos: 1000, y_pos: 330, size: 50, isFound: false},

		{x_pos: 530, y_pos: 200, size: 50, isFound: false},
		{x_pos: 830, y_pos: 330, size: 50, isFound: false},
		{x_pos: 1300, y_pos: 300, size: 50, isFound: false},
		{x_pos: 1700, y_pos: 200, size: 50, isFound: false},
		{x_pos: 1900, y_pos: 421, size: 50, isFound: false},
		{x_pos: 2200, y_pos: 300, size: 50, isFound: false},
		{x_pos: 2650, y_pos: 421, size: 50, isFound: false}
	];
	
	clouds = [];
	clouds.push(new drawClouds(100, 200, 30, 100));
	clouds.push(new drawClouds(400, 100, 30, 100));
	clouds.push(new drawClouds(700, 60, 30, 100));
	clouds.push(new drawClouds(1500, 50, 30, 100));
	clouds.push(new drawClouds(1900, 100, 30, 100));
	clouds.push(new drawClouds(2200, 100, 30, 100));
	clouds.push(new drawClouds(2400, 180, 30, 100));
	clouds.push(new drawClouds(2750, 60, 30, 100));
	clouds.push(new drawClouds(2900, 100, 30, 100));

	mountains = [
		{pos_x: 100, pos_y: 200},
		{pos_x: 1100, pos_y: 230},
		{pos_x: 1600, pos_y: 200},
		{pos_x: 2500, pos_y: 230},
	];

	canyons = [
		{x_pos: 800, y_pos: 450, width: 200, height: 144},
		{x_pos: 1050,y_pos:450, width: 100, height: 144},
        {x_pos: 1200,y_pos:450, width: 400, height: 144},
        {x_pos: 2400,y_pos:450, width: 150, height: 144},
	];

    grounds = [
		{x_pos: 0, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 50, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 100, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 150, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 200, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 250, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 300, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 350, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 400, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 450, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 500, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 550, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 600, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 650, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 700, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 750, y_pos: floorPos_y, width:50, height: height/4},
        {x_pos: 1000, y_pos: floorPos_y, width:50, height: height/4},
        {x_pos: 1150, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1600, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1650, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1700, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1750, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1800, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1850, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1900, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 1950, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2000, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2050, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2100, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2150, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2200, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2250, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2300, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2350, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2550, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2600, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2650, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2700, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2750, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2800, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2850, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2900, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 2950, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3000, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3050, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3100, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3150, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3200, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3250, y_pos: floorPos_y, width:50, height: height/4},
		{x_pos: 3300, y_pos: floorPos_y, width:50, height: height/4},
    ]

	weather = [];
	weather.push(new Sun(960, floorPos_y+100, 60, 60));

    platforms = [];   
   	platforms.push(createPlatforms(300, floorPos_y-90, 100,2, 100));
	platforms.push(createPlatforms(460, floorPos_y-170, 100,2, 100));
   	platforms.push(createPlatforms(775, floorPos_y-90, 100,2, 100));
	platforms.push(createPlatforms(950, floorPos_y-160, 100,2, 100));
	platforms.push(createPlatforms(1220, floorPos_y-90, 100,2, 100));
    platforms.push(createPlatforms(1600, floorPos_y-110, 100,2, 100));

	rain = [];
	for(var i = 0; i < 800; i++)
	{
		rain[i] = new Rain(random(50, 10000), random(0, -3000));
	}
	
    enemies = [];
	enemies.push(new Enemy(200, 402, 30, 30, 100));
	enemies.push(new Enemy(650, 402, 30, 30, 100));
	enemies.push(new Enemy(950, 248, 30, 30, 100));
	enemies.push(new Enemy(1220, 318, 30, 30, 100));
	enemies.push(new Enemy(random(1600, 1700), 402, 30, 30, 100));
	enemies.push(new Enemy(random(2100, 2300), 402, 30, 30, 100));
	enemies.push(new Enemy(2700, 402, 30, 30, 100));
	
	
    flagpole = {x_pos: 3000, isReached: false}; 

    castle = {x_pos : 3070, isReached: false};
}