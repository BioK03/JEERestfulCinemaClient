function dispatcher(action, args) {
	console.info("Dispatcher appelé avec l'action "+action);
	switch(action){
		case "actorList":
			$('#mainContent').html(Actor.getList(Actor.test));
			break;
		case "actorDetails":
			$("#mainContent").html(Actor.getDetails(args));
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
			console.error("Action appelée non définie : "+action);
	}
	
	declareEvents();
}