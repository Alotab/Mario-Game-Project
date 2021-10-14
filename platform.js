
//function to Draw Platforms

function createPlatforms(x, y, length,speedx, range)
{
    var p = {
        x: x,
        y: y,
		
        length: length,
		speedx: speedx, 
		range: range,
		currentX: x,

        draw: function()
		{
			image(platformPadImg,this.currentX, this.y, this.length, 20);
        },

		move: function()
		{
			this.currentX += speedx;

			if(this.currentX >= this.x + range)
			{
				speedx -= 0.05;	
			}
			else if(this.currentX < this.x)
			{
				speedx += 0.05;
			}	
		},

        checkContact: function(gc_x, gc_y)
        {
            if(gc_x > this.currentX && gc_x < this.currentX  + this.length)
            {
                var d = this.y - gc_y;
                if(d > 0 && d < 5)
                {	
                    return true;
                }  
            }
            return false;
        },
    }
    return p;
}