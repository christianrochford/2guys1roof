<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
{if segment_1 == 'theroof'}
	<title>The Roof | DUBLIN 東西</title>
	<meta name="description" content="Read the latest articles on adventures in home improvements and DIY as two new home owners take an old house in Dublin and make it new again.">
{if:elseif segment_1 == 'roof'}
{exp:channel:entries channel="article" limit="1"}
	<title>{title} | DUBLIN 東西</title>
	<meta name="description" content="{exp:excerpt limit="50" limit_type="char" indicator="..."}{article_text}{/exp:excerpt}">
{/exp:channel:entries}
{if:elseif segment_1 == 'thefood'}
	<title>The Food | DUBLIN 東西</title>
	<meta name="description" content="A food blog focussed on gluten free and dairy free recipes and restaurants in Dublin, Ireland, Work up your appetite checking out the latest recipes from our kitchen as well as the latest restaurants to night out in Dublin.">
{if:elseif segment_1 == 'food'}
{exp:channel:entries channel="food" limit='1'}
	<title>{title} | DUBLIN 東西</title>
	<meta name="description" content="{exp:excerpt limit="50" limit_type="char" indicator="..."}{food_text}{/exp:excerpt}">
{/exp:channel:entries}
{if:elseif segment_1 == 'theplace'}
	<title>The Place | DUBLIN 東西</title>
	<meta name="description" content="Street photography from out and about in Dublin, Ireland. View what we're viewing through the camera lens.">
{if:elseif segment_1 == 'theguys'}
	<title>The Guys | DUBLIN 東西</title>
	<meta name="description" content="Read a short bit about us and why we put this website together.">
{if:else}
	<title>DUBLIN 東西</title>
	<meta name="description" content="DUBLIN 東西 is a home improvements blog, its a gluten free food blog, its a photo journal. Its things we do and things we enjoy in Dublin.">
{/if}
	<link rel="stylesheet" href="{site_url}assets/stylesheets/screen.css">
	<link rel="shortcut icon" href="{site_url}favicon.ico">
	<link href="apple-touch-icon.png" rel="apple-touch-icon" />
	<link href="apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
	<link href="apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
	<link href="apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
	<script src="{site_url}assets/js/modernizr.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
</head>