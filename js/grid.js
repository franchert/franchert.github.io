$(document).ready(function () {
	var dims = 40;
	var sentinel = 0;
	var gc = document.getElementById("grid-container");
	for (var i=0;i<dims;i++){
		for (var j=0;j<dims;j++){
			var dx = document.createElement("div");
			dx.className = 'grid';
			dx.setAttribute('style','background: rgb(255,255,255)');
			gc.appendChild(dx);
		}
		var br = document.createElement("br");
		gc.appendChild(br);
	};
	$(".grid").mousedown(function(e){
		var active_color = document.getElementsByClassName('active color');
		for (var i = 0; i < active_color.length; i++) {
			var a = active_color[i];
			var color_id = a.style.getPropertyValue('background-color');
		}
		this.setAttribute('style','background:' + color_id );
	});
	$("#grid-container").mousedown(function(e){
		//console.log('down');
		sentinel = 1;
		stopDefault(e);
		$(".grid").mouseover(function(e){
			if (sentinel == 1){ 
				var active_color = document.getElementsByClassName('active color');
				for (var i = 0; i < active_color.length; i++) {
					var a = active_color[i];
					var color_id = a.style.getPropertyValue('background-color');
				}
				this.setAttribute('style','background:' + color_id );
			}
		});
	});
	$("html").mouseup(function(e){
		sentinel = 0;
	});
	$(".color").click(function(e){
		$("#options-container>.active").removeClass("active");
		this.className = "active color";
	});
	$("#reset-color").click(function(e){
		var reset_all = document.getElementsByClassName('grid');
		for (var i = 0; i < reset_all.length; i++) {
			var r = reset_all[i];
			r.setAttribute('style','background: rgb(255,255,255)');
		}
	});
});
function stopDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    else {
        window.event.returnValue = false;
    }
    return false;
}
