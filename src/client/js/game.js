var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var moveX = 0;
var moveY = 0;
var speed = 10;
var size = 50;

context.clearRect(0,0,canvas.width,canvas.height);
context.rect(moveX, moveY, size, size);
context.fillStyle = '#1ca846';
context.fill();
context.stroke();

function move(e)
{
	//UP DOWN LEFT RIGHT
	if(e.keyCode == 39)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveX += speed; //RIGHT
	}
	if(e.keyCode == 37)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveX -= speed; //LEFT
	}
	if(e.keyCode == 38)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveY -= speed; //UP
	}
	if(e.keyCode == 40)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveY += speed; //DOWN
	}
	//W A S D
	if(e.keyCode == 87)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveY -= speed; //UP W
	}
	if(e.keyCode == 83)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveY += speed; //DOWN S
	}
	if(e.keyCode == 65)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveX -= speed; //LEFT A
	}
	if(e.keyCode == 68)
	{
		context.clearRect(0,0,canvas.width,canvas.height);
		moveX += speed; //RIGHT D
	}
	//COLLISION DETECTION
	if(moveX <= 0)
	{
		moveX = 0;
	}
	if(moveY <= 0)
	{
		moveY = 0;
	}
	if(moveX >= canvas.width - size)
	{
		moveX = canvas.width - size;
	}
	if(moveY >= canvas.height - size)
	{
		moveY = canvas.height - size;
	}
	
	canvas.width=canvas.width;
	canvas.height=canvas.height;
	context.clearRect(0,0,canvas.width,canvas.height);
	context.rect(moveX, moveY, size, size);
	context.fillStyle = '#1ca846';
	context.fill();
	context.stroke();
}
document.onkeydown = move;