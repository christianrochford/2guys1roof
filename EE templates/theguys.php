{embed="base/_head"}

<body class="guys">

{embed="base/_guys_header"}

<div id="wrapper">
{exp:channel:entries channel="the_guys"}
		<div id="image-wrap">
			<div id="major" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="guys_profile_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
			<div id="minor-top" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="christian_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
			<div id="minor-bottom" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="diff_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
		</div>
		<h4>The Guys</h4>
		{guys_text}
		<a href="mailto:rochfordchristian@gmail.com" class="icon-envelope" aria-hidden="true"></a>
{/exp:channel:entries}
</div>

	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/app.js"></script>

</body>
<html>