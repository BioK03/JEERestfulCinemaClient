var Movie = {
    getList: function(data) {
		var result = `
			<button class="clickable btn" data-action="movieAdd"><i class="fa fa-plus"></i> Ajouter un film</button>
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
		result += '</tbody> </table>'
		printResults("#mainContent", result);
		
	},
	getDetails: function(data) {
		var result = '<button class="clickable btn" data-action="movieEdit" data-args="'+data[0].noMovie+'"><i class="fa fa-edit"></i> Editer ce film</button>'
			+'<button class="clickable btn" data-action="movieDelete" data-args="'+data[0].noMovie+'"><i class="fa fa-remove"></i> Supprimer ce film</button><br/>'
			+'<span class="details">Numéro du film</span> : '+data[0].noMovie+'<br/>'
			+'<span class="details">Nom</span> : '+data[0].title+'<br/>'
			+'<span class="details">Durée</span> : '+data[0].duration+'<br/>'
			+'<span class="details">Recettes</span> : '+data[0].incomings+' €<br/>'
			+'<span class="details">Date de sortie</span> : '+data[0].releaseDate+'<br/>'
			+'<span class="details">Budget</span> : '+data[0].budget+' €<br/>'
			+'<span class="clickable link" data-action="directorDetails" data-args="'+data[0].director.noRea+'"><span class="details">Réalisateur</span> : '+data[0].director.firstnameRea+' '+data[0].director.lastnameRea+'</span><br/>'
			+'<span class="clickable link" data-action="categoryDetails" data-args="'+data[0].category.catCode+'"><span class="details">Catégorie</span> : '+data[0].category.wording+'('+data[0].category.catCode+')'+'</span><br/><br/>'
			+'<br/>'+((data[0].picture)?'<img src="'+data[0].picture+'"/><br/>':'')
			+'<a href="'+data[0].allocineLink+'">Lien AlloCiné</>'
			+'<span class="details">Acteurs</span> :';

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
	getAddForm: function() {
		var result = `<h3>Ajout d'un film</h3>
			<div class="form">
				<label for="title">Titre du film</label><br/>
				<input id="title" type="text" name="title" placeholder="Titre du film" /><br/>
				<label for="duration">Durée (en minutes)</label><br/>
				<input id="duration" type="number" name="duration" min="0" placeholder="Durée (en minutes)" /><br/>
				<label for="budget">Budget</label><br/>
				<input id="budget" type="number" name="budget" min="0" step="10000" placeholder="Budget" /><br/>
				<label for="incomings">Recettes (en euro)</label><br/>
				<input id="incomings" type="number" name="incomings" min="0" step="10000" placeholder="Recettes (en euro)" /><br/>
				<label for="releaseDate">Date de sortie (AAAA-MM-JJ)</label><br/>
				<input id="releaseDate" class="datepicker" type="text" name="releaseDate" placeholder="Date de sortie (AAAA-MM-JJ)" /><br/>
				<label for="category">Categorie</label><br/>
				<select id="category" name="category"> </select><br/>
				<label for="director">Réalisateur</label><br/>
				<select id="director" name="director"> </select><br/>
				<label for="picture">Image</label><br/>
				<input id="picture" class="inputPicture" type="text" name="picture" placeholder="Image" /><br/>
				<img class="picturepreview" src=""><br/>
				<label for="allocineLink">Lien AlloCiné</label><br/>
				<input id="allocineLink" type="text" name="allocineLink" placeholder="Lien AlloCiné" /><br/>
				<button class="clickable" data-action="movieAddSumbit">Valider</button>
			</div>
			`;
		printResults("#mainContent", result);
		request("director/list/", Movie.getFormDirector);
		request("category/list/", Movie.getFormCategory);
	},
	getFormDirector: function(data) {
		var result = "";
			
		data.forEach(function(value) {
			result += '<option value="'+value.noRea+'" '+($("#director").data("id")== value.noRea? 'selected' : '')+'>'+value.firstnameRea+' '+ value.lastnameRea+'</option>';
		});
		printResults("#director", result);
	},
	getFormCategory: function(data) {
		var result = "";
			
		data.forEach(function(value) {
			result += '<option value="'+value.catCode+'" '+($("#category").data("id")== value.catCode? 'selected' : '')+'>'+value.wording+'</option>';
		});
		printResults("#category", result);
	},
	getEditForm: function(data) {
		var result = '<h3>Edition d\'un film</h3>'
			+'<div class="form">'
				+'<input type="hidden" name="noMovie" value="'+data[0].noMovie+'"/>'
				+'<label for="title">Titre du film</label><br/>'
				+'<input id="title" type="text" name="title" value="'+data[0].title+'" placeholder="Titre du film" /><br/>'
				+'<label for="duration">Durée (en minutes)</label><br/>'
				+'<input id="duration" type="text" name="duration" value="'+data[0].duration+'" placeholder="Durée (en minutes)" /><br/>'
				+'<label for="budget">Budget</label><br/>'
				+'<input id="budget" type="number" name="budget" value="'+data[0].budget+'" min="0" step="10000" placeholder="Budget" /><br/>'
				+'<label for="incomings">Recettes (en euro)</label><br/>'
				+'<input id="incomings" type="number" name="incomings" value="'+data[0].incomings+'" min="0" step="10000" placeholder="Recettes (en euro)" /><br/>'
				+'<label for="releaseDate">Date de sortie (AAAA-MM-JJ)</label><br/>'
				+'<input id="releaseDate" class="datepicker" type="text" name="releaseDate" value="'+data[0].releaseDate+'" placeholder="Date de sortie (AAAA-MM-JJ)" /><br/>'
				+'<label for="picture">Image</label><br/>'
				+'<input id="picture" class="inputPicture" type="text" name="picture" value="'+data[0].picture+'" placeholder="Image" /><br/>'
				+'<label for="category">Categorie</label><br/>'
				+'<select id="category" name="category" data-id="'+data[0].category.catCode+'"> </select><br/>'
				+'<label for="director">Réalisateur</label><br/>'
				+'<select id="director" name="director" data-id="'+data[0].director.noRea+'"> </select><br/>'
				+'<label for="picture">Image</label><br/>'
				+'<img class="picturepreview" src="'+data[0].picture+'"><br/>'
				+'<label for="allocineLink">Lien AlloCiné</label><br/>'
				+'<input id="allocineLink" type="text" name="allocineLink" value="'+data[0].allocineLink+'" placeholder="Lien AlloCiné" /><br/>'
				+'<button class="clickable" data-action="movieEditSumbit" data-args="'+data[0].noMovie+'">Valider</button>'
			+'</div>';
		printResults("#mainContent", result);
		request("director/list/", Movie.getFormDirector);
		request("category/list/", Movie.getFormCategory);
	},
};