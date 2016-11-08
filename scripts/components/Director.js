var Director = {
    getList: function(data) {
		var result = `
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
		var result = ''
			+'<img src="'+data[0].picture+'"/><br/>'
			+'Numéro du réalisateur : '+data[0].noRea+'<br/>'
			+'Prénom : '+data[0].firstnameRea+'<br/>'
			+'Nom : '+data[0].lastnameRea+'<br/>'
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
		result += '</tbody> </table>';
		printResults("#movies", result);
	},
};