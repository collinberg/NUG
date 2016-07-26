'use strick';

var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send("<h1>Connection Made</h1>");
	
});

app.listen(3000, function(){
	console.log('The Frontend Server is Running por 3000');
});

//var movies = array();

//for (movie in movies){
//	var item;
	//Create Item for Carousel
	//Call API information for movie
	//Add that informaiton into the carousel item (Post Name, year published)
	//Add that item to the Carousel
//}