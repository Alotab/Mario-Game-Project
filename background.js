
// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds(cloudX, cloudY, width, range)
{
	this.cloudX = cloudX;
	this.cloudY = cloudY;
	this.width = width;
	this.range = range;
	this.currentX = cloudX;
	this.increaseX = 0.1;

	this.update = function()
	{
		this.currentX += this.increaseX;

		if(this.currentX >=  this.cloudX + this.range)
		{
			this.increaseX -= 0.1;
		}
		else if(this.currentX < this.cloudX)
		{
			this.increaseX = 0.1;
		}
	}

	this.draw = function()
	{
		this.update();
		rect(this.currentX + 40, this.cloudY, 90, 20, 10);
		ellipse(this.currentX + 65, this.cloudY, this.width);
		ellipse(this.currentX +90, this.cloudY -10, this.width + 10, 40);
		ellipse(this.currentX +110, this.cloudY + 5, this.width);
	}

	this.move =  function()
	{
		this.currentX += 0.1;
		this.cloudY = cloudY + random(-0.5, 0.5);
	}
}


// Function to draw mountains objects.
function drawMountains()
{
	for(var i = 0; i < mountains.length; i++)
	{
		fill(85, 65, 36);
		triangle(
			mountains[i].pos_x + 100, mountains[i].pos_y + 232, 
			mountains[i].pos_x + 250, mountains[i].pos_y, 
			mountains[i].pos_x + 400, mountains[i].pos_y + 232
			);
		triangle(
			mountains[i].pos_x + 170, mountains[i].pos_y + 232, 
			mountains[i].pos_x + 350, mountains[i].pos_y - 70, 
			mountains[i].pos_x + 520, mountains[i].pos_y + 232
			);
	}
}


// Function to draw trees objects.
function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
	{
		image(treeImg, 75 + trees_x[i], floorPos_y - 270, 150, 290);
	}
}
