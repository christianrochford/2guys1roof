{embed="base/_head"}

<body class="guys">

<header>
		<div class="logo">
			<a href="index"><span class="icon-house" arial-hidden="true"></span></a>
		</div>
		<div id="menus">
			<nav>
				<ul>
					<li><a href="#" id="roof">The Roof</a></li>
					<li><a href="theGuys" class="no-sub">The Guys</a></li>
					<li><a href="thePlace" class="no-sub">The Place</a></li>
					<li><a href="#" id="social">Be Social</a>
						<div class="social-nav">
							<ul>
								<li><a href="#"><span class="icon-facebook" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-twitter" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-tumblr" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-pinterest" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-googleplus" arial-hidden="true"></span></a></li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	</header>

<div id="wrapper">
{exp:channel:entries channel="the_guys"}
		<div id="image-wrap">
			<div id="major" style="background: url('
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="guys_profile_image"}
			{image:url:large}
			{/exp:channel_images:images}
			');"></div>
			<div id="minor-top" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="christian_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
			<div id="minor-bottom" style="background: url('
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="diff_image"}
			{image:url:large}
			{/exp:channel_images:images}
			');"></div>
		</div>
		<p>{guys_text}<p>
		<a href="mailto:rochfordchristian@gmail.com" class="icon-envelope" aria-hidden="true"></a>
{/exp:channel:entries}
</div>

	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/app.js"></script>

</body>
<html>