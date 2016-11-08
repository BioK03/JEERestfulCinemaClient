var Category = {
    getList: function(data) {
		var result = `
			<button class="clickable btn" data-action="categoryAdd"><i class="fa fa-plus"></i> Ajouter une catégorie</button>
			<table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Code de catégorie</th>
						<th>Libellé</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Code de catégorie</th>
						<th>Libellé</th>
					</tr>
				</tfoot>
				<tbody>`;
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="categoryDetails" data-args="'+value.catCode+'">'
				+'	<td>'+value.catCode+'</td>'
				+'	<td>'+value.wording+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		printResults("#mainContent", result);
	},
	getDetails: function(data) {
		var result = ''
			+'<button class="clickable btn" data-action="categoryEdit" data-args="'+data[0].catCode+'"><i class="fa fa-edit"></i> Editer cette catégorie</button>'
			+'<button class="clickable btn" data-action="categoryDelete" data-args="'+data[0].catCode+'"><i class="fa fa-remove"></i> Supprimer cette catégorie</button><br/>'
			+'<span class="details">Code de catégorie</span> : '+data[0].catCode+'<br/>'
			+'<span class="details">Libellé</span> : '+data[0].wording+'<br/>'
			+'<br/>'+((data[0].picture)?'<img src="'+data[0].picture+'"/><br/> ':'')
			+'<span class="details">Films de cette catégorie</span> : <br/>'
			+'<span id="movies"></span>';
		printResults("#mainContent", result);
		request("movie/category/"+data[0].catCode, Category.getDetailsMovie);
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
		result += '</tbody> </table>'
		printResults("#movies", result);
	},
	getAddForm: function() {
		var result = `<h3>Ajout d'une catégorie</h3>
			<div class="form">
				<label for="catCode">Code de la catégorie</label><br/>
				<input id="catCode" type="text" name="catCode" placeholder="Code de la catégorie"maxlength="2"/><br/>
				<label for="wording">Libellé</label><br/>
				<input id="wording" type="text" name="wording" placeholder="Libellé" maxlength="20"/><br/>
				<label for="picture">Image</label><br/>
				<input id="picture" type="text" name="picture" placeholder="Image"/>
				<button class="clickable" data-action="categoryAddSumbit">Valider</button>
			</div>
			`;
		printResults("#mainContent", result);
	},
	getEditForm: function(data) {
		var result = '<h3>Edition d\'une catégorie</h3>'
			+'<div class="form">'
				+'<label for="catCode">Code de la catégorie</label><br/>'
				+'<input id="catCode" type="text" name="catCode" value="'+data[0].catCode+'" placeholder="Code de la catégorie" disabled /><br/>'
				+'<label for="wording">Libellé</label><br/>'
				+'<input id="wording" type="text" name="wording" value="'+data[0].wording+'" placeholder="Libellé" /><br/>'
				+'<button class="clickable" data-action="categoryEditSumbit" data-args="'+data[0].catCode+'">Valider</button>'
				+'<label for="picture">Image</label><br/>'
				+'<input id="picture" type="text" name="picture" value="'+data[0].picture+'" placeholder="Image"/>'
				+'<button class="clickable" data-action="categoryEditSumbit">Valider</button>'
				+'</div>';
		printResults("#mainContent", result);
	},
};