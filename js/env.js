function env(app){
	console.log('Detected host: ', window.location.host);

	var res = window.location.hostname.match(/epsy.io/gi);

	var url = {};

	// Set URL for Loopback API
	if(res === null){
		console.info('Local Environment');

		url = {
			api: '//' + window.location.hostname + ':5000/api',
			app: '//' + window.location.hostname + ':3002',
			logout: '//' + window.location.host + '/login.html',
			socket: '//' + window.location.hostname + ':5000'
		};

		app.constant('env', 'local');
		app.constant('url', url);
	}
	else{
		console.info('Production Environment');

		url = {
			api: '//epsy-api.herokuapp.com/api',
			apP: '//app.epsy.io',
			logout: 'http://www.epsy.io',
			socket: '//epsy-api.herokuapp.com'
		};

		app.constant('env', 'production');
		app.constant('url', url);
	}

	console.info('URL API: ', url.api);
	console.info('URL Socket.io: ', url.socket);
	console.info('URL Logout: ', url.logout);
}
