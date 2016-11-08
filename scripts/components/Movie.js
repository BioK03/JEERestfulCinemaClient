var Movie = {
    getList: function(data) {
		var result = `
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Numéro film</th>
						<th>Nom</th>
            			<th>Date de sortie</th>
            			<th>Durée</th>
            			<th>Budget</th>
            			<th>Recettes</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Numéro film</th>
						<th>Nom</th>
            			<th>Date de sortie</th>
            			<th>Durée</th>
            			<th>Budget</th>
            			<th>Recettes</th>
					</tr>
				</tfoot>
				<tbody>`;
			
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
		printResults("#mainContent", result);
		
	},
	getDetails: function(data) {
		var result = ''
			+'<img src="'+data[0].picture+'"/><br/>'
			+'Numéro du film : '+data[0].noMovie+'<br/>'
			+'Nom : '+data[0].title+'<br/>'
			+'Durée : '+data[0].duration+'<br/>'
			+'Recettes : '+data[0].incomings+'<br/>'
			+'Date de sortie : '+data[0].releaseDate+'<br/>'
			+'Budget : '+data[0].budget+' €<br/>'
			+'<a href="'+data[0].allocineLink+'" target="_blank">Lien Allocine</a><br/>'
			+'<span class="clickable" data-action="directorDetails" data-args="'+data[0].director.noRea+'">Réalisateur : '+data[0].director.firstnameRea+' '+data[0].director.lastnameRea+'</span><br/>'
			+'<span class="clickable" data-action="categoryDetails" data-args="'+data[0].category.catCode+'">Catégorie : '+data[0].category.wording+'('+data[0].category.catCode+')'+'</span><br/><br/>'
			+'Acteurs :'
			+'<span id="actors"></span>';

		printResults("#mainContent", result);
		request("actor/movie/"+data[0].noMovie, Movie.getDetailsActor);
	},
	getDetailsActor: function(data) {
		var result = `
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Numéro acteur</th>
						<th>Nom</th>
						<th>Prenom</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Numéro acteur</th>
						<th>Nom</th>
						<th>Prenom</th>
					</tr>
				</tfoot>
				<tbody>`;
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="actorDetails" data-args="'+value.noAct+'">'
				+'	<td>'+value.noAct+'</td>'
				+'	<td>'+value.lastnameAct+'</td>'
				+'	<td>'+value.firstnameAct+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>';
		printResults("#actors", result);
	},
};