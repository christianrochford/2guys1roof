/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'dublindongxi\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-envelope': '&#xf003;',
		'icon-twitter': '&#xe003;',
		'icon-facebook': '&#xe002;',
		'icon-googleplus': '&#xe001;',
		'icon-pinterest': '&#xe004;',
		'icon-youtube': '&#xe600;',
		'icon-social': '&#xe605;',
		'icon-slider-right': '&#xe607;',
		'icon-slider-left': '&#xe608;',
		'icon-search2': '&#xe609;',
		'icon-play': '&#xe60d;',
		'icon-play-hover': '&#xe60e;',
		'icon-menu': '&#xe60f;',
		'icon-close': '&#xe61f;',
		'icon-arrow-down': '&#xe620;',
		'icon-house': '&#xe601;',
		'icon-camera': '&#xe606;',
		'icon-cutlery': '&#xe603;',
		'icon-guys': '&#xe604;',
		'icon-title': '&#xe60a;',
		'icon-arrow-left': '&#xe602;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
