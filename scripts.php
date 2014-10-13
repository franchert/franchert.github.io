	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="/foundation/js/vendor/modernizr.js"></script>
    <script src="/foundation/js/foundation.min.js"></script>
	<script type="text/javascript" src="/js/slideshow.js"></script>
	<script type="text/javascript" src="/js/viewportSize.js"></script>
	<?php if($page != ""){	?>
		<script type="text/javascript" src="/js/<?php echo $page ?>.js"></script>	
	<?php } ?>
	<?php if($page == "grid"){	?>
		<script type="text/javascript" src="jscolor/jscolor.js"></script>
	<?php }