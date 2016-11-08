var Director = {
    getList: function(data) {
		var result = `
			<h3>Liste des réalisateurs</h3>
			<button class="clickable btn" data-action="directorAdd"><i class="fa fa-plus"></i> Ajouter un réalisateur</button>
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Numéro réalisateur</th>
						<th>Prénom</th>
            			<th>Nom</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Numéro réalisateur</th>
						<th>Prénom</th>
            			<th>Nom</th>
					</tr>
				</tfoot>
				<tbody>`;
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="directorDetails" data-args="'+value.noRea+'">'
				+'	<td>'+value.noRea+'</td>'
                +'	<td>'+value.firstnameRea+'</td>'
				+'	<td>'+value.lastnameRea+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>';
		printResults("#mainContent", result);
	},
	getDetails: function(data) {
		var result = '<h3>Details du directeur</h3>'
			+'<button class="clickable btn" data-action="directorEdit" data-args="'+data[0].noRea+'"><i class="fa fa-edit"></i> Editer ce réalisateur</button>'
			+'<button class="clickable btn" data-action="directorDelete" data-args="'+data[0].noRea+'"><i class="fa fa-remove"></i> Supprimer ce réalisateur</button><br/>'
			+'<span class="details">Numéro du réalisateur</span> : '+data[0].noRea+'<br/>'
			+'<span class="details">Prénom</span> : '+data[0].firstnameRea+'<br/>'
			+'<span class="details">Nom</span> : '+data[0].lastnameRea+'<br/>'
			+'<span class="details">Films de ce réalisateur</span> : <br/>'
			+'<br/>'+((data[0].picture)?'<img src="'+data[0].picture+'"/><br/>':'')
			+'Films de ce réalisateur : <br/>'
			+'<span id="movies"></span>';
		printResults("#mainContent", result);
		request("movie/director/"+data[0].noRea, Director.getDetailsMovie);
	},
	getDetailsMovie: function(data) {
		var result = `
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Numéro film</th>
						<th>Nom</th>
            			<th>Date de sortie</th>
            			<th>Durée</th>
            			<th>Budget €</th>
            			<th>Recettes €</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Numéro film</th>
						<th>Nom</th>
            			<th>Date de sortie</th>
            			<th>Durée</th>
            			<th>Budget €</th>
            			<th>Recettes €</th>
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
		result += '</tbody> </table>';
		printResults("#movies", result);
	},
	getAddForm: function() {
		var result = `<h3>Ajout d'un réalisateur</h3>
			<div class="form">
				<label for="firstnameRea">Prénom du réalisateur</label><br/>
				<input id="firstnameRea" type="text" name="firstnameRea" required placeholder="Prénom du réalisateur" /><br/>
				<label for="lastnameRea">Nom du réalisateur</label><br/>
				<input id="lastnameRea" type="text" name="lastnameRea" required placeholder="Nom du réalisateur" /><br/>
				<label for="picture">Image</label><br/>
				<input id="picture" class="inputPicture" type="text" name="picture" placeholder="Image" /><br/>
				<img class="picturepreview" src=""><br/>
				<button class="clickable btn" data-action="directorAddSumbit"><i class="fa fa-check"></i>Valider</button>
			</div>
			`;
		printResults("#mainContent", result);
	},
	getEditForm: function(data) {
		var result = '<h3>Edition d\'un réalisateur</h3>'
			+'<div class="form">'
				+'<input type="hidden" name="noRea" value="'+data[0].noRea+'"/>'
				+'<label for="firstnameRea">Prénom du réalisateur</label><br/>'
				+'<input id="firstnameRea" type="text" name="firstnameRea" value="'+data[0].firstnameRea+'" required placeholder="Prénom du réalisateur" /><br/>'
				+'<label for="lastnameRea">Nom du réalisateur</label><br/>'
				+'<input id="lastnameRea" type="text" name="lastnameRea" value="'+data[0].lastnameRea+'" required placeholder="Nom du réalisateur" /><br/>'
				+'<label for="picture">Image</label><br/>'
				+'<input id="picture" class="inputPicture" type="text" name="picture" value="'+data[0].picture+'" placeholder="Image" /><br/>'
				+'<img class="picturepreview" src="'+data[0].picture+'"><br/>'
				+'<button class="clickable btn" data-action="directorEditSumbit" data-args="'+data[0].noRea+'"><i class="fa fa-check"></i>Valider</button>'
			+'</div>';
		printResults("#mainContent", result);
	},
};