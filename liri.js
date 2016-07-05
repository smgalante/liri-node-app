var request = require('./keys.js');
var Twitter = require('twitter');

var client = new Twitter(request.twitterKeys);

var task = process.argv[2];

if (task == 'my-tweets') {
var params = {screen_name: 'smgalante', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	console.log(error);
	if(!error){
		console.log(tweets);
	}
});
};