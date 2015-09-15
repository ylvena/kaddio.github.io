function env(app){
	console.log('Detected host: ', window.location.host);

	var res = window.location.hostname.match(/epsy.io/gi);

	// Set URL for Loopback API
	if(res == null){
		console.info('Local Environment');

		var url = {
			api: 'http://' + window.location.hostname + ':5000/api',
			app: 'http://' + window.location.hostname + ':3002',
			logout: 'http://' + window.location.host + '/login.html',
			socket: 'http://' + window.location.hostname + ':5000'
		};

		app.constant('env', 'local');
		app.constant('url', url);
	}
	else{
		console.info('Production Environment');

		var url = {
			api: 'http://api.epsy.io/api',
			apP: 'http://app.epsy.io',
			logout: 'http://www.epsy.io',
			socket: 'http://api.epsy.io'
		};

		app.constant('env', 'production');
		app.constant('url', url);
	}

	console.info('URL API: ', url.api);
	console.info('URL Socket.io: ', url.socket);
	console.info('URL Logout: ', url.logout);
}
