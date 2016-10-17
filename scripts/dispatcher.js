function dispatcher(action, args) {
	console.info("Dispatcher appelé avec l'action "+action);
	switch(action){
		case "index":
			$("#mainContent").html("");
			break;
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
		case "movieDetails":
			request("movie/"+args, Movie.getDetails);
			break;

		/*
	    ■■■ ■■■ ■■■ ■■■ ■■■ ■ ■
	    ■   ■   ■ ■ ■ ■ ■   ■ ■
	    ■■■ ■■  ■■■ ■■■ ■   ■■■
	      ■ ■   ■ ■ ■■  ■   ■ ■
	    ■■■ ■■■ ■ ■ ■ ■ ■■■ ■ ■
	 	*/
		 case 'search':
		 	var value = $("#searchValue").val();
		 	request("search/"+value, Global.getSearchResults);
		 	break;

		/*
	 	■■■ ■■  ■■ 
		■ ■ ■ ■ ■ ■
		■■■ ■ ■ ■ ■
		■ ■ ■ ■ ■ ■
		■ ■ ■■  ■■
		*/
		case "categoryAdd":
			Category.getAddForm();
			break;
		case "categoryAddSumbit":
			postRequest("category/add/", formToPostString());
			break;
		
		/*
		■■■ ■■  ■■■ ■■■
		■   ■ ■  ■   ■
		■■  ■ ■  ■   ■
		■   ■ ■  ■   ■
		■■■ ■■  ■■■  ■ 
		*/
		case "categoryEdit":
			request("category/"+args, Category.getEditForm);
			break;
		case "categoryEditSumbit":
			postRequest("category/edit/", formToPostString());
			break;

		/*
		■■  ■■■ ■   ■■■ ■■■ ■■■
		■ ■ ■   ■   ■    ■  ■
		■ ■ ■■  ■   ■■   ■  ■■
		■ ■ ■   ■   ■    ■  ■
		■■  ■■■ ■■■ ■■■  ■  ■■■
		*/
		case "categoryDelete":
			request("category/delete/"+args);
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