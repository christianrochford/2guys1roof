<header>
		<div class="logo">
			<a href="{site_url}index.php/base/index"><span class="icon-house" arial-hidden="true"></span></a>
		</div>
		<div id="menus">
			<nav>
				<ul>
					<li><a href="#" id="roof">The Roof</a>
						<ul id="categories">
							<li class="filter" data-filter="all"><a href="#">All</a> | <a href="#" id="list-trigger">List</a> | <a href="#" id="grid-trigger">Grid</a></li>
							{exp:channel:categories style="linear" category_group="1"}
							<li class="filter" data-filter="{category_url_title}"><a href="#">{category_name}</a></li>
							{/exp:channel:categories}
						</ul>
					</li>
					<li><a href="{site_url}index.php/base/theGuys" class="no-sub">The Guys</a></li>
					<li><a href="{site_url}index.php/base/thePlace" class="no-sub">The Place</a></li>
					<li><a href="#" id="social">Be Social</a>
						<div class="social-nav">
							<ul>
								<li><a href="#"><span class="icon-facebook" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-twitter" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-tumblr" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-pinterest" arial-hidden="true"></span></a></li>
								<li><a href=""><span class="icon-googleplus" arial-hidden="true"></span></a></li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	</header>