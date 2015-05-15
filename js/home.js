	var s=0, cx = 0, cy = 0, opac = 0.8, edgepad=55;
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
});
    function drawStuff() {
				var xB=	cx/4;//rdmRng(edgepad,cx-edgepad);
				var yB=	cy;//rdmRng(edgepad,cy-edgepad);
		for(var j = 0; j<20; j++){
				colx=Math.round(rdmRng(0,55));
				coly=Math.round(rdmRng(222,255));
				colz=Math.round(rdmRng(0,111));  
				a = rdmRng((cx/2)-edgepad,(cx/2)+edgepad);
				b = rdmRng((cy/2)-edgepad,(cy/2)+edgepad);
				c = rdmRng((cx/4)-edgepad,(cx/2)+edgepad);
				d = rdmRng((cy/4)-edgepad,(cy/2)+edgepad);
				e = rdmRng((cx/15)-edgepad,(cx/1.1)+edgepad);
				f = rdmRng((cy/6)-edgepad,(cy/2)+edgepad);	
			for(var i = 0; i<6; i++){
				context.lineWidth = 5;
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
				spread=24;
				//don't move the origin each time
				//xB += rdmRng(-spread,spread);
				//yB += rdmRng(-spread,spread);
				a += rdmRng(-spread,spread);
				b += rdmRng(-spread,spread);
				c += rdmRng(-spread,spread);
				d += rdmRng(-spread,spread);
			}
			xB=xB+3;
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