/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'2guys1roof\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-uniF000': '&#xf000;',
		'icon-envelope': '&#xf003;',
		'icon-twitter': '&#xe003;',
		'icon-facebook': '&#xe002;',
		'icon-googleplus': '&#xe001;',
		'icon-pinterest': '&#xe004;',
		'icon-tumblr': '&#xe005;',
		'icon-instagram': '&#xe000;',
		'icon-house': '&#xe006;',
		'icon-cube': '&#xe007;',
		'icon-youtube': '&#xe600;',
		'icon-twitter2': '&#xe601;',
		'icon-social': '&#xe605;',
		'icon-social-link': '&#xe606;',
		'icon-slider-right': '&#xe607;',
		'icon-slider-left': '&#xe608;',
		'icon-search2': '&#xe609;',
		'icon-play': '&#xe60d;',
		'icon-play-hover': '&#xe60e;',
		'icon-menu': '&#xe60f;',
		'icon-menu-arrow': '&#xe610;',
		'icon-mail': '&#xe611;',
		'icon-facebook2': '&#xe61a;',
		'icon-close': '&#xe61f;',
		'icon-arrow-down': '&#xe620;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
