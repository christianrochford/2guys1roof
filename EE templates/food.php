{embed="base/_head"}

<body class="meals">

{embed="base/_header"}

<div id="wrapper">

	<div id="content">
		<div id="post-wrap">
		{exp:channel:entries channel="food"}
		<a href="{site_url}thefood" class="icon-arrow-left" aria-hidden="true"></a>
		{if food_video}
		<div id="video-wrap">
		<iframe id="player" src="//www.youtube.com/embed/{article_video}?rel=0&autoplay=1&modestbranding=0&showinfo=0&color=#47cbcd" allowfullscreen></iframe>
		</div>
		{if:else}
			<div class="flexslider">
				<ul class="slides">
					{exp:channel_images:images entry_id="{entry_id}" limit="20" field="food_images"}
					<li>
					<img src="{image:url:large}" alt="{title}" />
					</li>
					{/exp:channel_images:images}
				</ul>
			</div>
		{/if}
			<div class="post-text-wrap">
				<h4>{title}</h4>
				{food_text}
			</div>
			<div id="links">
				<div class="icon-social" aria-hidden="true">
                                  <div id="popup-view">
                                      <ul>
                                        <li>
					  <a href="http://www.facebook.com/sharer.php?s=100&p[title]={site_name} | {title}&p[summary]={exp:excerpt limit="50"}{food_text}{/exp:excerpt}&p[url]={current_url}&p[images][0]=
					  {exp:channel_images:images entry_id="{entry_id}" limit="1" field="food_image"}
					  {image:url:small}
					  {/exp:channel_images:images} 
					  " class="icon-facebook social-icon" target="_blank"></a>
					</li>
                    			<li>
					  <a href="https://twitter.com/share?url={current_url}&text={title}" target="_blank" class="icon-twitter social-icon"></a>
					</li>
                    			<li>
					  <a href="//pinterest.com/pin/create/button/?url={current_url}&media=
					  {exp:channel_images:images entry_id="{entry_id}" limit="1" field="food_image"}
          				  {image:url:small}
					  {/exp:channel_images:images}
        				  &description={title}" data-pin-do="buttonPin" data-pin-config="none" class="icon-pinterest social-icon" target="_blank"></a></li>
                    			<li><a href="http://plus.google.com/share?url={current_url}" class="icon-googleplus social-icon" target="_blank"></a></li>
                                      </ul>
                                  </div> 
				</div>
			</div>
	<div id="disqus_thread"></div>
    	<script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'dublindongxi'; // required: replace example with your forum shortname
  	var disqus_identifier = '{title}';
  	var disqus_title = '{title}';
        var disqus_url = '{current_url}';
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    	</script>
    	<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	{/exp:channel:entries}
		</div>
	</div>

</div>

{embed="base/_footer"}