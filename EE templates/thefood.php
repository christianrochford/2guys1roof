{embed="base/_head"}

<body class="food">

{embed="base/_header"}

<div id="wrapper" class="clearfix isotope">

		<ul id="food">
		{exp:channel:entries channel="food" category_group="2" dynamic="no" sort="desc"}
			<li class="element {categories}{category_url_title} {/categories}">
				<img src="
				{exp:channel_images:images entry_id="{entry_id}" limit="1" field="food_images"}
				{image:url:small}
				{/exp:channel_images:images}
				" alt="{title}">
				<div class="overbox">
					<div class="text-wrap">
						<a href="{site_url}food/{url_title}" class="post-link" title="{url_title}"><h4>{title}</h4></a>
					</div>
					<a class="icon-cutlery post-icon" aria-hidden="true"></a>
				</div>
			</li>
		{/exp:channel:entries}
		</ul>
	</div>

{embed="base/_footer"}