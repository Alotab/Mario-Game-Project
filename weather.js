
// ----------------------------------
// rain, sun and weather check functions
// ----------------------------------

function Rain(x, y)
{
	this.x = x;
	this.y = y;
	this.length = 15;
	this.r = 0;
	this.opacity = 200;

	this.rainDrops = function()
	{
		noStroke();
		fill(255);
		ellipse(this.x, this.y, 3, this.length);
		
		this.y = this.y + 3;
		if(this.y > 900)
		{
			this.length = this.length - 5;
		}
		if(this.length < 0)
		{
			this.length = 0;
		}	
	}

	this.rainSplash = function()
	{
		strokeWeight(2);
		stroke(245, this.opacity);
		noFill();
		if(this.y > floorPos_y-30)
		{
			ellipse(this.x, floorPos_y + 20, this.r * 2, this.r/2);
			
			this.r += 1;
			this.opacity = this.opacity - 15;

			//rain dropping
			if(this.opacity < 0)
			{
				this.y = random(0, -100);
				this.length = 15;
				this.r = 1;
				this.opacity = 200;	
			}
		}
	}
}

function weatherCheck()
{
	if(isRaining == true)
	{
		
		for(var i = 0; i< clouds.length; i++)
		{
			fill(57, 88, 119)
			clouds[i].draw();
			clouds[i].move();
		}
		for(var i = 0; i < rain.length;i++)
		{
			rain[i].rainDrops();
			rain[i].rainSplash();
		}
	}
	else{
		for(var i = 0; i< clouds.length; i++)
		{
			fill(255, 255, 255);
			clouds[i].draw();
			clouds[i].move();
		}
	}
}

function Sun(x, y, w, h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.currentY = y;
	this.inc = 1;

	this.move = function()
	{
		this.currentY -= this.inc;
		if( this.currentY <= height/2 - 200)
		{
			noStroke();
			fill(255, 165, 0, 50);
			ellipse(this.x, this.currentY, w, h) 
			this.inc = -1;	
		}

		if(this.currentY == height/2-200)
		{
			noStroke();
			fill(255, 165, 0, 50);
			ellipse(this.x, this.currentY, w, h);
			this.inc ++;			
		}
	}

	this.draw = function()
	{
		this.move();
		noStroke();
		fill(255, 100, 0, 100);
		ellipse(this.x, this.currentY, w, h);

		//Inner circle
		noStroke();
		fill(255, 165, 0, 50);
		ellipse(this.x, this.currentY, w + 40, h + 40);
	}
}
