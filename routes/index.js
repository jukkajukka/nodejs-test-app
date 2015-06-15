
/*
 * GET home page.
 */

exports.index = function(req, res){
  	var os = require('os');

  	res.render('index', {
		title: 'Express',
		hostname: os.hostname(),
		network: os.networkInterfaces()
	})
};