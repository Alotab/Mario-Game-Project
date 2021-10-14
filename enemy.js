
// enemy function

function Enemy(x,y, w, h, range) 
{
    this.x = x;
    this.y = y;
	this.w = w;
	this.h = h;
    this.range = range;
    this.currentX = x;
    this.inc = 1;

    this.update = function()
    {	
        this.currentX += this.inc;
	
        if(this.currentX >= this.x + this.range)
        {
            this.inc = -1;	
        }
		
        if(this.currentX < this.x)
        {
            this.inc = 1;
        }
    }
	
    this.draw = function()
    {
		this.update();
		image(enemyImg,this.currentX, this.y, this.w, this.h );
    }

    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX + 10, this.y + 15)
        if(d < 19) 
        {
			this.currentX = this.x + 3;
            return true;
        }
        return false;
    }
}
