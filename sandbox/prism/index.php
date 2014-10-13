<!DOCTYPE html>
<html>
  <head>
	<?php 
		$page = "prism";
		include "../../head.php"; 
	?>
  </head>
<body class="page-<?php print $page ?>">
	<?php include "../../nav.php"; ?>
		<canvas id="canvas"></canvas>
		<div class="row">
			<div class="content">
				<div class="large-12 columns">

				</div>
			</div>
		</div>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
