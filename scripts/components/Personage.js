var Personage = {
    getList: function(data) {
		var result = `
			<button class="clickable btn" data-action="personageAdd"><i class="fa fa-plus"></i> Ajouter un personnage</button>
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Film</th>
						<th>Acteur</th>
            			<th>Personnage</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Film</th>
						<th>Acteur</th>
            			<th>Personnage</th>
					</tr>
				</tfoot>
				<tbody>`;
			
		data.forEach(function(value) {
			result += ''
				+'<tr>'
				+'	<td class="hoverable" data-action="movieDetails" data-args="'+value.movie.noMovie+'">'+value.movie.title+'</td>'
                +'	<td class="hoverable" data-action="actorDetails" data-args="'+value.actor.noAct+'">'+value.actor.firstnameAct+' '+value.actor.lastnameAct+'</td>'
				+'	<td class="hoverable" data-action="personageDetails" data-args="'+value.movie.noMovie+'/'+value.actor.noAct+'">'+value.persName+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		printResults("#mainContent", result);
	},
	getDetails: function(data) {
		var result = '<button class="clickable btn" data-action="personageEdit" data-args="'+data[0].movie.noMovie+'/'+data[0].actor.noAct+'"><i class="fa fa-edit"></i> Editer ce personnage</button>'
			+'<button class="clickable btn" data-action="personageDelete" data-args="'+data[0].movie.noMovie+'/'+data[0].actor.noAct+'"><i class="fa fa-remove"></i> Supprimer ce personage</button><br/>'
			+'<span class="clickable link" data-action="movieDetails" data-args="'+data[0].movie.noMovie+'"> <span class="details">Nom du film</span> : '+data[0].movie.title+'</span><br/>'
			+'<span class="clickable link" data-action="actorDetails" data-args="'+data[0].actor.noAct+'"> <span class="details">Acteur</span> : '+data[0].actor.firstnameAct+' '+data[0].actor.lastnameAct+'</span><br/>'
			+'<span class="details">Nom du personnage</span> : '+data[0].persName+'<br/>'
		printResults("#mainContent", result);
	},
	getAddForm: function() {
		var result = `<h3>Ajout d'un personage</h3>
			<div class="form">
				<label for="actor">Nom de l'acteur</label><br/>
				<select id="actor" name="actor"> </select><br/>
				<label for="movie">Nom du film</label><br/>
				<select id="movie" name="movie"> </select><br/>
				<label for="persName">Nom du personnage</label><br/>
				<input id="persName" type="text" name="persName" required placeholder="Nom du personnage" /><br/>
				<button class="clickable" data-action="personageAddSumbit">Valider</button>
			</div>
			`;
		printResults("#mainContent", result);
		request("movie/list/", Personage.getFormMovie);
		request("actor/list/", Personage.getFormActor);
	},
	getFormMovie: function(data) {
		var result = "";
			
		data.forEach(function(value) {
			result += '<option value="'+value.noMovie+'">'+value.title+'</option>';
		});
		printResults("#movie", result);
	},
	getFormActor: function(data) {
		var result = "";
			
		data.forEach(function(value) {
			result += '<option value="'+value.noAct+'">'+value.firstnameAct+' '+value.lastnameAct+'</option>';
		});
		printResults("#actor", result);
	},
	getEditForm: function(data) {
		var result = '<h3>Edition d\'un personnage</h3>'
			+'<div class="form">'
				+'<input type="hidden" name="actor" value="'+data[0].actor.noAct+'"/>'
				+'<input type="hidden" name="movie" value="'+data[0].movie.noMovie+'"/><br/>'
				+'<label for="actor">Nom de l\'acteur</label><br/>'
				+'<input id="actor" type="text" name="actorName" value="'+data[0].actor.firstnameAct+' '+data[0].actor.lastnameAct+'" disabled /><br/>'
				+'<label for="movie">Nom du film</label><br/>'
				+'<input id="movie" type="text" name="movieTitle" value="'+data[0].movie.title+'" disabled/><br/>'
				+'<label for="persName">Nom du personnage</label><br/>'
				+'<input id="persName" type="text" name="persName" value="'+data[0].persName+'" required placeholder="Nom du personnage"/><br/>'
				+'<button class="clickable" data-action="personageEditSumbit" data-args="'+data[0].movie.noMovie+'/'+data[0].actor.noAct+'">Valider</button>'
			+'</div>';
		printResults("#mainContent", result);
	},
};