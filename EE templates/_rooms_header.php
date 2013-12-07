<header>
		<div class="logo">
			<a href="#" id="mobile-nav"><span class="icon-menu" arial-hidden="true"></span></a>
			<a href="{site_url}index"><span class="icon-house" arial-hidden="true"></span></a>
			<a href="{site_url}index" id="sitename">Dublin東西</a>
		</div>
		<div id="menus">
			<nav>
				<ul>
					<li><a href="#" id="roof">The Roof</a>
						<ul id="categories">
							<li class="filter" data-filter="all"><a href="#" class="close">All</a> | <a href="#" id="list-trigger" class="close">List</a> | <a href="#" id="grid-trigger" class="close">Grid</a></li>
							{exp:channel:categories style="linear" category_group="1"}
							<li class="filter" data-filter="{category_url_title}"><a href="#" class="close">{category_name}</a></li>
							{/exp:channel:categories}
						</ul>
					</li>
					<li><a href="{site_url}thefood">The Food</a></li>
					<li><a href="{site_url}theplace">The Place</a></li>
					<li><a href="{site_url}theguys">The Guys</a></li>
				</ul>
			</nav>
		</div>
	</header>