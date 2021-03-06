{embed="base/_head"}

<body class="home">

{embed="base/_header"}

<div id="wrapper">

		<ul id="rooms" class="just">
		{exp:channel:entries channel="article" category_group="1" dynamic="no" sort="desc"}
			<li class="mix {categories}{category_url_title} {/categories}" style="background:url(
			{exp:channel_images:images entry_id="{entry_id}" limit="1" field="article_images"}
			{image:url:small}
			{/exp:channel_images:images}
			);">
				<div class="overbox">
					<div class="text-wrap">
						<a href="{site_url}roof/{url_title}" class="post-link" title="{url_title}"><h4>{title}</h4></a>
						<p>{exp:excerpt limit="50" limit_type="char" indicator="..."}{article_text}{/exp:excerpt}</p>
					</div>
					<a class="icon-house post-icon" aria-hidden="true"></a>
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

{embed="base/_footer"}