var omdb = require('omdb');
var posts = require('./mock/posts.json'); 
	  //Turn Object into array

var postsLists = Object.keys(posts).map(function(value){
	return posts[value]
});

var title = {};
function Movie(){
	
	omdb.get({ title: 'Star Wars', year: 1980 }, true, function(err, movie) {
	    if(err) {
	        return console.error(err);
	    }
	 
	    if(!movie) {
	        return console.log('Movie not found!');
	    }
	 
	    //console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
	    //console.log(movie.plot);
	    
	    title.title = movie.title;
	    title.year = movie.year;
	    title.rating = movie.imdb.rating;
	    title.poster = movie.poster;

	});

	return title;
}


module.exports = Movie;