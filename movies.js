function infoMovie(){
	//Create a list of movies	
	//var movies = ['The American Side','An Inconvenient Truth','APEX: The Story of the Hypercar'];
	var movie = "Star Wars"
	//Replace all  splaces with +
	movie[0].replace(/ /g, "+");
	
	//request json for movie
	var url = "http://www.omdbapi.com/?t=" + movie + "&type=movie&y=&plot=short&r=json";
	//for (movie in movies){
	//	var item;
		//Create Item for Carousel
		//Call API information for movie
		//Add that informaiton into the carousel item (Post Name, year published)
		//Add that item to the Carousel
	//}
	return url;

}

module.exports = infoMovie;