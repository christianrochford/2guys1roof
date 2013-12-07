{embed="base/_head"}

<body class="food">

{embed="base/_the_food_header"}

<div id="wrapper">

		<ul id="food" class="just">
		{exp:channel:entries channel="food" category_group="2" dynamic="no" sort="desc"}
			<li class="mix {categories}{category_url_title} {/categories}" style="background:url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="food_images"}
			{image:url:small}
			{/exp:channel_images:images}
			);">
				<div class="overbox">
					<div class="text-wrap">
						<a href="{site_url}food/{url_title}" class="post-link" title="{url_title}"><h4>{title}</h4></a>
						<p>{exp:excerpt limit="50" limit_type="char" indicator="..."}{food_text}{/exp:excerpt}</p>
					</div>
					<a class="icon-cutlery post-icon" aria-hidden="true"></a>
				</div>
			</li>
		{/exp:channel:entries}
		<li class="gap"></li>
		<li class="gap"></li>
		<li class="gap"></li>
		<li class="gap"></li>
		<li class="gap"></li>
		</ul>
	</div>

	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery-migrate-1.2.1.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/app.js"></script>
</body>
</html>