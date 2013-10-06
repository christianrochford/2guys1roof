/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-envelope' : '&#xf003;',
			'icon-search' : '&#xf002;',
			'icon-twitter' : '&#xe003;',
			'icon-facebook' : '&#xe002;',
			'icon-googleplus' : '&#xe001;',
			'icon-pinterest' : '&#xe004;',
			'icon-tumblr' : '&#xe005;',
			'icon-instagram' : '&#xe000;',
			'icon-house' : '&#xe006;',
			'icon-cube' : '&#xe007;'
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
};