<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<?php 
		$page = "grid";
		include "../../head.php";
	?>
<body>	
	<?php
		include "../../nav.php";
    ?> 
<div class="row">
	<div class="large-12 columns">
		<h2>Quick Grid</h2>
		<p  class="intro">
			I needed a square grid that I could quickly make patterns on for a game I was playing, so I decided to make one. The buttons within the gray bar act as a color selection, click and hold to color each square. Printing the colors requires turning on printing background colors and images in the browser settings.
		</p>
		<div id="options-container">
			<div class="active color" style="background-color:rgb(255,255,255);"></div>
			<div class="color" style="background-color:rgb(55,55,55);"></div>
			<div class="color" style="background-color:rgb(0,190,17);"></div>
			<div class="color" style="background-color:rgb(0,55,255);"></div>
			<div class="color" style="background-color:rgb(255,0,0);"></div>
			<div class="color" style="background-color:rgb(255,165,0);"></div>
			<input class="color">
			<div id="reset-color">erase all</div>
			<div id="grid-container"></div>
		</div>
	</div>
</div>

</body>
</html>