	var s=0, cx = 0, cy = 0, opac = 0.5, edgepad=15,counter=0,circles = new Array();
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
	context.fillStyle = "#333";
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
});
function drawStuff() {
	c=document.getElementById("canvas");
	interval = setInterval("render()",30);
}
function render(){
    if (counter==30){
        addShape();
        counter=20;
    }
    else{counter++;}
    for (something in circles){
		/*Redraws the image each rotation*/
        circles[something].x += circles[something].xmove;
        circles[something].y += circles[something].ymove;
        circles[something].draw(context);
        
    }   
}
function addShape(){
    var x=Math.floor(rdmRng(0,cx));
    var y=Math.floor(rdmRng(0,cy));
	var ymove =rdmRng(-2,2);/**/
	var xmove =rdmRng(-2,2);/**/
	var circleradius=rdmRng(3,7);
	
    var something = new Circle(circleradius,x,y,xmove,ymove);
	circles.push(something);
    something.draw(context);
}
function Circle(circleradius,x,y,xmove,ymove){
    var color1= 0   /*Math.floor(Math.random()*256)+0;/**/
    var color2= 0   /*Math.floor(Math.random()*256)+0;/**/
    var color3= 0   /*Math.floor(Math.random()*256)+0;/**/
    this.radius = circleradius;
    this.x = x;
    this.y = y;
    this.xmove = xmove;
    this.ymove = ymove;
    this.color = "rgb("+color1+","+color2+","+color3+")";
}
Circle.prototype.draw = function(context){
    context.fillStyle=this.color;
    context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    context.closePath();
    context.fill();
};

function rdmRng(bottom,top){
    if (bottom<0 && top <0){
        range = Math.abs(bottom)-Math.abs(top);
    }
    else if (bottom>0 && top>0){
        range = -Math.abs(bottom)+Math.abs(top);
    }
    else{
        range = Math.abs(bottom)+Math.abs(top);
    }
    var test = Math.random()*range+bottom;
    return test;    
}
function resizeCanvas() {
	topbar = $("#top-bar").height();
	canvas.width = viewportSize.getWidth();
	canvas.height = viewportSize.getHeight()-topbar;
	cx = canvas.width;
	cy = canvas.height;
	drawStuff(); 
}