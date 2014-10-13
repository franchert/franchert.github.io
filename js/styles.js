$(document).ready(function(){

$("#toggle").click(function(n){
	n.preventDefault();
	$("#toggle").parent(".wrapper").toggleClass("open");
});

});