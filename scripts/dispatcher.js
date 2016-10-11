function dispatcher(action, args) {
	console.info("Dispatcher appelé avec l'action "+action);
	switch(action){
		/* 
		■   ■■■ ■■■ ■■■ ■■■
		■    ■  ■    ■  ■  
		■    ■  ■■■  ■  ■■■
		■    ■    ■  ■    ■
		■■■ ■■■ ■■■  ■  ■■■ 
		*/
		case "actorList":
			request("actor/list", Actor.getList);
			break;
		case "categoryList":
			request("category/list", Category.getList);
			break;
		case "directorList":
			request("director/list", Director.getList);
			break;
		case "movieList":
			request("movie/list", Movie.getList);
			break;
		case "personageList":
			request("personage/list", Personage.getList);
			break;

		/*
		■■  ■■■ ■■■ ■■■ ■■■ ■   ■■■
		■ ■ ■    ■  ■ ■  ■  ■   ■
		■ ■ ■■   ■  ■■■  ■  ■   ■■■
		■ ■ ■    ■  ■ ■  ■  ■     ■
		■■  ■■■  ■  ■ ■ ■■■ ■■■ ■■■
		*/
		case "actorDetails":
			request("actor/"+args, Actor.getDetails);
			break;
		case "categoryDetails":
			request("category/"+args, Category.getDetails);
			break;
		case "directorDetails":
			request("director/"+args, Director.getDetails);
			break;
		
		
		default:
			console.error("Action appelée non définie : "+action);
	}
}

function printResults(container, data){
	console.info("Content printed");
	$(container).html(data);
	declareEvents();
}