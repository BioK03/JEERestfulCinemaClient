var Actor = {
	getList: function(data) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="actorDetails" data-args="'+value.noAct+'">'
				+'	<td>'+value.noAct+'</td>'
				+'	<td>'+value.lastnameAct+'</td>'
				+'	<td>'+value.firstnameAct+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		printResults("#mainContent", result);
	},
	getDetails: function(data) {
		var result = ''
			+'Numéro acteur : '+data[0].noAct+'<br/>'
			+'Prénom : '+data[0].firstnameAct+'<br/>'
			+'Nom : '+data[0].lastnameAct+'<br/>'
			+'Date de naissance : '+data[0].birthdate+'<br/>'
			+((data[0].deathdate)?'Date de décès : '+data[0].deathdate:'')
			+'<br/>'+(+(data[0].picture)?'<img src="'+data[0].picture+'"/>':'')
			+'<br/> Films dans lequel a joué l\'acteur<br/>'
			+'<span id="movies"></span>';
		printResults("#mainContent", result);
		request("movie/actor/"+data[0].noAct, Actor.getDetailsMovie);
	},
	getDetailsMovie: function(data) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Numéro film</th>'
			+'			<th>Nom</th>'
            +'			<th>Date de sortie</th>'
            +'			<th>Durée</th>'
            +'			<th>Budget</th>'
            +'			<th>Recettes</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Numéro film</th>'
			+'			<th>Nom</th>'
            +'			<th>Date de sortie</th>'
            +'			<th>Durée</th>'
            +'			<th>Budget</th>'
            +'			<th>Recettes</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="movieDetails" data-args="'+value.noMovie+'">'
				+'	<td>'+value.noMovie+'</td>'
                +'	<td>'+value.title+'</td>'
				+'	<td>'+value.releaseDate+'</td>'
                +'	<td>'+value.duration+'</td>'
                +'	<td>'+value.budget+'</td>'
                +'	<td>'+value.incomings+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		printResults("#movies", result);
	}
};