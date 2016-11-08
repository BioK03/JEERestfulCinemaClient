var Actor = {
	getList: function(data) {
		var result = `
			<button class="clickable btn" data-action="actorAdd"><i class="fa fa-plus"></i> Ajouter un acteur</button>
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
		printResults("#mainContent", result);
	},
	getDetails: function(data) {
		var result = '<button class="clickable btn" data-action="actorEdit" data-args="'+data[0].noAct+'"><i class="fa fa-edit"></i> Editer cet acteur</button>'
			+'<button class="clickable btn" data-action="actorDelete" data-args="'+data[0].noAct+'"><i class="fa fa-remove"></i> Supprimer cet acteur</button><br/>'
			+'<span class="details">Numéro acteur</span> : '+data[0].noAct+'<br/>'
			+'<span class="details">Prénom</span> : '+data[0].firstnameAct+'<br/>'
			+'<span class="details">Nom</span> : '+data[0].lastnameAct+'<br/>'
			+'<span class="details">Date de naissance</span> : '+data[0].birthdate+'<br/>'
			+((data[0].deathdate)?'<span class="details">Date de décès</span> : '+data[0].deathdate:'', '<span class="details">Date de décès</span> : Acteur vivant')
			+'<br/>'+(+(data[0].picture)?'<img src="'+data[0].picture+'"/>':'')
			+'<br/> <span class="details">Films dans lequel a joué l\'acteur</span><br/>'
			+'<span id="movies"></span>';
		printResults("#mainContent", result);
		request("movie/actor/"+data[0].noAct, Actor.getDetailsMovie);
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
		var result = `<h3>Ajout d'un acteur</h3>
			<div class="form">
				<label for="firstnameAct">Prénom de l\'acteur</label><br/>
				<input id="firstnameAct" type="text" name="firstnameAct" placeholder="Prénom de l\'acteur" /><br/>
				<label for="lastnameAct">Nom de l\'acteur</label><br/>
				<input id="lastnameAct" type="text" name="lastnameAct" placeholder="Nom de l\'acteur" /><br/>
				<label for="birthdate">Date de naissance (AAAA-MM-JJ)</label><br/>
				<input id="birthdate" type="text" name="birthdate" placeholder="Date de naissance (AAAA-MM-JJ)" /><br/>
				<label for="deathdate">Date de décès (AAAA-MM-JJ)</label><br/>
				<input id="deathdate" type="text" name="deathdate" placeholder="Date de décès (AAAA-MM-JJ)" /><br/>
				<button class="clickable" data-action="actorAddSumbit">Valider</button>
			</div>
			`;
		printResults("#mainContent", result);
	},
	getEditForm: function(data) {
		var result = '<h3>Edition d\'un acteur</h3>'
			+'<div class="form">'
				+'<label for="firstnameAct">Prénom de l\'acteur</label><br/>'
				+'<input id="firstnameAct" type="text" name="firstnameAct" value="'+data[0].firstnameAct+'" placeholder="Prénom de l\'acteur" /><br/>'
				+'<label for="lastnameAct">Nom de l\'acteur</label><br/>'
				+'<input id="lastnameAct" type="text" name="lastnameAct" value="'+data[0].lastnameAct+'" placeholder="Nom de l\'acteur" /><br/>'
				+'<label for="birthdate">Date de naissance (AAAA-MM-JJ)</label><br/>'
				+'<input id="birthdate" type="text" name="birthdate" value="'+data[0].birthdate+'" placeholder="Date de naissance (AAAA-MM-JJ)" /><br/>'
				+'<label for="deathdate">Date de décès (AAAA-MM-JJ)</label><br/>'
				+'<input id="deathdate" type="text" name="deathdate" value="'+data[0].deathdate+'" placeholder="Date de décès (AAAA-MM-JJ)" /><br/>'
				+'<button class="clickable" data-action="actorEditSumbit" data-args="'+data[0].noAct+'">Valider</button>'
			+'</div>';
		printResults("#mainContent", result);
	},
};