{embed="base/_head"}

<body class="guys">

{embed="base/_header"}

<div id="wrapper">
{exp:channel:entries channel="the_guys"}
		<div id="image-wrap">
			<div id="profile1" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="diff_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
			<div id="profile2" style="background: url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="christian_image"}
			{image:url:large}
			{/exp:channel_images:images}
			);"></div>
		</div>
		<h4>The Guys</h4>
		{guys_text}
		<a href="mailto:rochfordchristian@gmail.com" class="icon-envelope" aria-hidden="true"></a>
{/exp:channel:entries}
</div>

{embed="base/_footer"}