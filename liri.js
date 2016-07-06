var request = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

var client = new Twitter(request.twitterKeys);

var task = process.argv[2];

if (task == 'my-tweets') {
var params = {screen_name: 'smgalante', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if(!error){
		for ( i = 0; i < 20; i++) {
			console.log(tweets[i].text);
		}		
	}
});
};

if (task == 'spotify-this-song'){
	var song = process.argv[3];
	spotify.search({type:'track', query: song}, function(err, data){
		if (err) {
			console.log('Error occured: ' + err);
			return;
		} else {
			console.log(data.tracks.items[0].artists[0].name) //artist
			console.log(data.tracks.items[0].name) //track
			console.log(data.tracks.items[0].preview_url) //preview url
			console.log(data.tracks.items[0].album.name) //album
		};
	});

} else {
	spotify.search({type:'track', query: 'what\'s my age again'}, function(err, data){
		if (err) {
			console.log('Error occured: ' + err);
			return;
		} else {
			console.log(data.tracks.items[0].artists[0].name) //artist
			console.log(data.tracks.items[0].name) //track
			console.log(data.tracks.items[0].preview_url) //preview url
			console.log(data.tracks.items[0].album.name) //album

}
});
};