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
		case "personageDetails":
			request("personage/"+args, Personage.getDetails);
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
			setTimeout(function(){
				dispatcher("categoryList");
			}, 500);
			break;
		case "personageAdd":
			Personage.getAddForm();
			break;
		case "personageAddSumbit":
			postRequest("personage/add/", formToPostString());
			setTimeout(function(){
				dispatcher("personageList");
			}, 500);
			break;
		case "movieAdd":
			Movie.getAddForm();
			break;
		case "movieAddSumbit":
			postRequest("movie/add/", formToPostString());
			setTimeout(function(){
				dispatcher("movieList");
			}, 500);
			break;
		case "directorAdd":
			Director.getAddForm();
			break;
		case "directorAddSumbit":
			postRequest("director/add/", formToPostString());
			setTimeout(function(){
				dispatcher("directorList");
			}, 500);
			break;
		case "actorAdd":
			Actor.getAddForm();
			break;
		case "actorAddSumbit":
			postRequest("actor/add/", formToPostString());
			setTimeout(function(){
				dispatcher("actorList");
			}, 500);
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
			dispatcher("categoryDetails", args);
			break;
		case "personageEdit":
			request("personage/"+args, Personage.getEditForm);
			break;
		case "personageEditSumbit":
			postRequest("personage/edit/", formToPostString());
			dispatcher("personageDetails", args);
			break;
		case "movieEdit":
			request("movie/"+args, Movie.getEditForm);
			break;
		case "movieEditSumbit":
			postRequest("movie/edit/", formToPostString());
			dispatcher("movieDetails", args);
			break;
		case "directorEdit":
			request("director/"+args, Director.getEditForm);
			break;
		case "directorEditSumbit":
			postRequest("director/edit/", formToPostString());
			dispatcher("directorDetails", args);
			break;
		case "actorEdit":
			request("actor/"+args, Actor.getEditForm);
			break;
		case "actorEditSumbit":
			postRequest("actor/edit/", formToPostString());
			dispatcher("actorDetails", args);
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
			setTimeout(function(){
				dispatcher("categoryList");
			}, 500);
			
			break;
		case "personageDelete":
			request("personage/delete/"+args);
			setTimeout(function(){
				dispatcher("personageList");
			}, 500);
			
			break;
		case "movieDelete":
			request("movie/delete/"+args);
			setTimeout(function(){
				dispatcher("movieList");
			}, 500);
			
			break;
		case "directorDelete":
			request("director/delete/"+args);
			setTimeout(function(){
				dispatcher("directorList");
			}, 500);
			
			break;
		case "actorDelete":
			request("actor/delete/"+args);
			setTimeout(function(){
				dispatcher("actorList");
			}, 500);
			
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