<header>
		<div class="logo">
			<a href="#" id="mobile-nav"><span class="icon-menu" arial-hidden="true"></span></a>
			<a href="{site_url}"><span class="icon-cutlery" arial-hidden="true"></span></a>
			<a href="{site_url}" id="sitename">Dublin東西</a>
		</div>
		<div id="menus">
			<nav>
				<ul>
					<li><a href="{site_url}theroof">The Roof</a></li>
					<li><a href="#" id="food-link">The Food</a>
						<ul id="categories" class="food-cat filter option-set">
							<li>
								<a href="#filter-all" data-filter-value="" class="selected close">All</a>
							</li>
							{exp:channel:categories style="linear" category_group="2"}
							<li><a href="#filter-{category_url_title}" data-filter-value=".{category_url_title}" class="close">{category_name}</a></li>
							{/exp:channel:categories}
						</ul>
					</li>
					<li><a href="{site_url}theplace" class="no-sub">The Place</a></li>
					<li><a href="{site_url}theguys" class="no-sub">The Guys</a></li>
				</ul>
			</nav>
		</div>
	</header>