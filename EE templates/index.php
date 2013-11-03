{embed="base/_head"}

<body class="home">

{embed="base/_header"}

<div id="wrapper">
		<div id="article-content"></div>
		<ul id="rooms" class="just">
		{exp:channel:entries channel="article"}
			<li class="mix {category}" style="background:url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="article_images"}
			{image:url:small}
			{/exp:channel_images:images}
			);">
				<div class="overbox post-link" post-title="posts">
					<div class="text-wrap">
						<h4>{title}</h4>
						<p>{article_text}</p>
					</div>
					<div class="icon-wrap">
						<span class="icon-cube post-icon" aria-hidden="true"></span>
					</div>
				</div>
			</li>
		{/exp:channel:entries}
		</ul>
	</div>

	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery-migrate-1.2.1.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/app.js"></script>
</body>
</html>