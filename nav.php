	<nav class="top-bar" id="top-bar" data-topbar>
	  <ul class="title-area">
		<li class="name">
			<h1><a href="/">Chris Francart</a></h1>
		</li>
		<li class="toggle-topbar menu-icon"><a href="#">Menu</a></li>
	  </ul>

	  <section class="top-bar-section">
		<ul class="right">
			<li class="<?php if ($page == "about"){echo "active";} ?>"><a href="/about">About</a></li>
			<li class="<?php if ($page == "news"){echo "active";} ?>"><a href="/news">News</a></li>
			<li class="<?php if ($page == "styles"){echo "active";} ?>"><a href="/styles">Styles</a></li>
			<li class="<?php if ($page == "sandbox"){echo "active";} ?> has-dropdown not-click">
				<a href="/sandbox">Sandbox</a>
				<ul class="dropdown">
					<li><a href="/sandbox/prism">Prism</a></li>
					<li><a href="/sandbox/grid">Grid</a></li>
				</ul>
			</li>
		</ul>
	  </section>
	</nav>