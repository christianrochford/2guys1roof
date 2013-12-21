<header>
		<div class="logo">
			<a href="#" id="mobile-nav"><span class="icon-menu" arial-hidden="true"></span></a>
{if segment_1 == 'theroof'}
			<a href="{site_url}"><span class="icon-house" arial-hidden="true"></span></a>
{if:elseif segment_1 == 'roof'}
			<a href="{site_url}"><span class="icon-house" arial-hidden="true"></span></a>
{if:elseif segment_1 =='thefood'}
			<a href="{site_url}"><span class="icon-cutlery" arial-hidden="true"></span></a>
{if:elseif segment_1 =='restaurant-map'}
			<a href="{site_url}"><span class="icon-cutlery" arial-hidden="true"></span></a>
{if:elseif segment_1 =='food'}
			<a href="{site_url}"><span class="icon-cutlery" arial-hidden="true"></span></a>
{if:elseif segment_1 =='theplace'}
			<a href="{site_url}"><span class="icon-camera" arial-hidden="true"></span></a>
{if:else}
			<a href="{site_url}"><span class="icon-guys" arial-hidden="true"></span></a>
{/if}		
			<a href="{site_url}" id="sitename"><span class="icon-title" aria-hidden="true"></span></a>
		</div>
		<div id="menus">
			<nav>
				<ul>
{if segment_1 == 'theroof' AND segment_2 == ""}
					<li><a href="#" id="roof-link">The Roof</a>
						<ul id="categories">
							<li class="filter" data-filter="all"><a href="#" class="close">All</a> | <a href="#" id="list-trigger" class="close">List</a> | <a href="#" id="grid-trigger" class="close">Grid</a></li>
							{exp:channel:categories style="linear" category_group="1"}
							<li class="filter" data-filter="{category_url_title}"><a href="#" class="close">{category_name}</a></li>
							{/exp:channel:categories}
						</ul>
					</li>
{if:else}
					<li><a href="{site_url}theroof">The Roof</a></li>
{/if}
{if segment_1 == 'thefood' AND segment_2 == ""}
					<li><a href="#" id="food-link">The Food</a>
						<ul id="categories" class="food-cat filter option-set">
							<li>
								<a href="#filter-all" data-filter-value="" class="selected close">All</a>
							</li>
							{exp:channel:categories style="linear" category_group="2"}
							<li><a href="#filter-{category_url_title}" data-filter-value=".{category_url_title}" class="close">{category_name}</a></li>
							{/exp:channel:categories}
							<li><a href="{site_url}restaurant-map">Food Map</a></li>
						</ul>
					</li>
{if:else}
					<li><a href="{site_url}thefood">The Food</a></li>
{/if}
					<li><a href="{site_url}theplace">The Place</a></li>
					<li><a href="{site_url}theguys">The Guys</a></li>
				</ul>
			</nav>
		</div>
	</header>