# https://github.com/uBlockOrigin/uAssets/pull/3517
console.log('we are hereeeeeee')
twitch-videoad.js application/javascript
(function() {
	console.log('we are here')
	if ( /(^|\.)twitch\.tv$/.test(document.location.hostname) === false ) { return; }
	var realFetch = window.fetch;
	window.fetch = function(input, init) {
		if ( arguments.length >= 2 && typeof input === 'string') {
			console.log(arguments)
		}
		return realFetch.apply(this, arguments);
	};
})();