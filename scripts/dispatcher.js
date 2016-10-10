function dispatcher(action) {
	switch(action){
		case "actorList" :
		var test = '[{"noAct":1,"birthdate":"1948-07-30","firstnameAct":"Jean","lastnameAct":"Reno"},{"noAct":5,"birthdate":"1981-06-09","firstnameAct":"Natalie","lastnameAct":"Portman"},{"noAct":7,"birthdate":"1972-06-19","firstnameAct":"Jean","lastnameAct":"Dujardin"},{"noAct":8,"birthdate":"1917-07-27","deathdate":"1970-09-23","firstnameAct":"","lastnameAct":"Bourvil"},{"noAct":12,"birthdate":"1914-07-31","deathdate":"1983-01-27","firstnameAct":"Louis","lastnameAct":"De Funes"},{"noAct":13,"birthdate":"1955-07-29","firstnameAct":"Jean-Hugues","lastnameAct":"Anglade"},{"noAct":15,"birthdate":"1957-03-29","firstnameAct":"Christophe","lastnameAct":"Lambert"}]';
			$('#mainContent').html(Actor.getList(test));
			$('#monBouton').remove();
			/*$('#mainContent').html("<span> <h1> Bonjour </h1> </span>");*/
			break;
		
	}
	
	declareEvents();
}