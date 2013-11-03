{embed="base/_head"}

<body class="posts">

<div id="content">
		<div id="post-wrap">
		{exp:channel:entries channel="article"}
			<span class="icon-close" aria-hidden="true"></span>
			<div class="flexslider">
				<ul class="slides">
					{exp:channel_images:images entry_id="{entry_id}" limit="20" field="article_images"}
					<li>
					<img src="{image:url:large}" alt="{title}" />
					</li>
					{/exp:channel_images:images}
				</ul>
			</div>
			<div class="post-text-wrap">
				<h4>{title}</h4>
				<p>{article_text}<p>
			</div>
		{/exp:channel:entries}
		</div>
	</div>
	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery-migrate-1.2.1.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/app.js"></script>
</body>
</html>