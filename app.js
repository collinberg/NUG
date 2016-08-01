'use strick';

const express = require('express');
posts = require('./mock/posts.json'); 
	  //Turn Object into array

var postsLists = Object.keys(posts).map(function(value){
	return posts[value]
});
var app = express();

//Sets the CSS/JS folder to static
app.use('/static', express.static(__dirname + '/public'));

//Tells Express we're using jade
app.set('view engine', 'jade');
//where to look for jade files
app.set('views', './templates');

app.get('/', function(req,res){

			
	res.render('index');
});
app.get('/blog/:title?', function(req,res){

	var title = req.params.title
	if(title == undefined){
		res.status(503);
		res.render('blog',{post: postsLists});
	} else {
		var post = posts[title] || {};
		res.render('post',{post:post});
	}
});

app.listen(3000, function(){
	console.log('The Frontend Server is Running por 3000');
});

