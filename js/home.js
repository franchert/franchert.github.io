	var s=0, cx = 0, cy = 0, opac = 0.5, edgepad=15;
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
});
    function drawStuff() {
				//start in the center of the canvas instead of a random location
				var xB=	cx/2;//rdmRng(edgepad,cx-edgepad);
				var yB=	cy/2;//rdmRng(edgepad,cy-edgepad);
		for(var j = 0; j<13; j++){
				colx=Math.round(rdmRng(0,255));
				coly=Math.round(rdmRng(0,255));
				colz=Math.round(rdmRng(0,255));  
				a = rdmRng(edgepad,cx-edgepad);
				b = rdmRng(edgepad,cy-edgepad);
				c = rdmRng(edgepad,cx-edgepad);
				d = rdmRng(edgepad,cy-edgepad);
				e = rdmRng(edgepad,cx-edgepad);
				f = rdmRng(edgepad,cy-edgepad);		
			for(var i = 0; i<100; i++){
				context.lineWidth = 1;
				colorstring="rgba("+ colx + "," + coly + "," + colz + "," + opac +")";
				context.strokeStyle = colorstring;
				context.beginPath();
				context.moveTo(xB,yB);
				context.bezierCurveTo(a,b,c,d,e,f);
				context.stroke();
				colx += Math.round(rdmRng(-1,1));
				coly += Math.round(rdmRng(-1,1));
				colz += Math.round(rdmRng(-1,1));
				if (colx > 255){colx=255;}
				if (colx < 0){colx=0;}
				if (coly > 255){coly=255;}
				if (coly < 0){coly=0;}
				if (colz > 255){colz=255;}
				if (colz < 0){colz=0;}
				//controls the spread of each stroke
				spread=243;
				//don't move the origin each time
				//xB += rdmRng(-spread,spread);
				//yB += rdmRng(-spread,spread);
				a += rdmRng(-spread,spread);
				b += rdmRng(-spread,spread);
				c += rdmRng(-spread,spread);
				d += rdmRng(-spread,spread);
				e += rdmRng(-spread,spread);// all finish at same x coord
				f += rdmRng(-spread,spread);// all finish at same y coord
			}
		}
		context.beginPath();
		context.rect(0,0,cx,cy);
		context.fillStyle = "rgba(255,255,255,0.6)";
		context.fill();
		context.closePath();
		
		//draw intro text
		context.fillStyle="#111";
		context.font = "bold 16px arial, sans-serif";
		stringType("I build websites.",cx,cy)
	}

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
function stringType(string,cx,cy){
	pos = 20;
	for (var i = 0; i < string.length; i++) {
		var ch = string.charAt(i);
		context.fillText(ch, pos, 30);
		pos += context.measureText(ch).width;
	}
}
function resizeCanvas() {
	topbar = $("#top-bar").height();
	canvas.width = viewportSize.getWidth();
	canvas.height = viewportSize.getHeight()-topbar;
	cx = canvas.width;
	cy = canvas.height;
	drawStuff(); 
}