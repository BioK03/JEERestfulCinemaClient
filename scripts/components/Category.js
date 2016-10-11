var Category = {
    getList: function(data) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Code de catégorie</th>'
			+'			<th>Libellé</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Code de catégorie</th>'
			+'			<th>Libellé</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
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
			+'Code de catégorie : '+data[0].catCode+'<br/>'
			+'Libellé : '+data[0].wording+'<br/>'
			+'Films de cette catégorie : <br/>'
			+'<span id="movies"></span>';
		printResults("#mainContent", result);
		request("movie/category/"+data[0].catCode, Category.getDetailsMovie);
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
	},
};