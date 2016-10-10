function dispatcher(action, args) {
	console.log("Dispatcher called with action "+action);
	switch(action){
		case "actorList":
			$('#mainContent').html(Actor.getList(Actor.test));
			break;
		case "categoryList":
			$('#mainContent').html(Category.getList(Category.test));
			break;
		case "directorList":
			$('#mainContent').html(Director.getList(Director.test));
			break;
		case "movieList":
			$('#mainContent').html(Movie.getList(Movie.test));
			break;
		case "personageList":
			$('#mainContent').html(Personage.getList(Personage.test));
			break;
		default:
			console.error("Called undefined action : "+action);
	}
	
	declareEvents();
}