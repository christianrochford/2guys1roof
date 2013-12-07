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
					<li><a href="#" id="food">The Food</a>
						<ul id="categories" class="food-cat">
							<li class="filter" data-filter="all"><a href="#" class="close">All</a> | <a href="#" id="list-trigger" class="close">List</a> | <a href="#" id="grid-trigger" class="close">Grid</a></li>
							{exp:channel:categories style="linear" category_group="2"}
							<li class="filter" data-filter="{category_url_title}"><a href="#" class="close">{category_name}</a></li>
							{/exp:channel:categories}
						</ul>
					</li>
					<li><a href="{site_url}theplace" class="no-sub">The Place</a></li>
					<li><a href="{site_url}theguys" class="no-sub">The Guys</a></li>
				</ul>
			</nav>
		</div>
	</header>