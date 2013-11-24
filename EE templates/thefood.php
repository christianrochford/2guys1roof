{embed="base/_head"}

<body class="home">

{embed="base/_header"}

<div id="wrapper">

<div id="content"></div>

{exp:channel:entries channel="article" dynamic="no" limit="1" url_title="segment_4" require_entry="yes"}

{if segment_4 == url_title}

		<div id="post-wrap">
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
		</div>

{/if}

{/exp:channel:entries}

		<ul id="rooms" class="just">
		{exp:channel:entries channel="article" category_group="1" dynamic="no" sort="desc"}
			<li class="mix {categories}{category_url_title} {/categories}" style="background:url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="article_images"}
			{image:url:small}
			{/exp:channel_images:images}
			);">
				<div class="overbox">
					<div class="text-wrap">
						<a href="{site_url}index.php/base/posts/{url_title}" class="post-link" title="{url_title}"><h4>{title}</h4></a>
						<a href="{site_url}index.php/base/posts/{url_title}" class="post-link" title="{url_title}"><p>{exp:excerpt limit="50" limit_type="..."}{article_text}{/exp:excerpt}</p></a>
					</div>
					<a class="icon-cube post-icon" aria-hidden="true"></a>
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
	<script src="{site_url}assets/js/history/scripts/bundled/html4+html5/jquery.history.js""></script>
	<script src="{site_url}assets/js/ajax.js"></script>
	<script src="{site_url}assets/js/app.js"></script>
</body>
</html>