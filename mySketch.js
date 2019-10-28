let myArray = [];
let psX = [];
let psY = [];
let i;
let body = 1;
let stepX = -25
let stepY = 25

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for (let i = 0; i < body; i++){
	   myArray[i] = new snake(0, 0);
	} 
	
}

function draw() {
	background(0)
	for (let i = 0; i < body; i++){
	   myArray[i].show();
		 myArray[i].move();
	}
}

function mouseReleased() {
	myArray.push(new snake(stepX,stepY));
	body = body + 1;
	stepX = stepX - 25;
	stepY = stepY + 25;
	
}

class snake { 
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.size = 50;
	}
	
	show() {
		fill(100,100,200)
		ellipse(mouseX+this.x, mouseY+this.y, this.size, this.size)
	}
	
	move() {
		
	}
	

}
