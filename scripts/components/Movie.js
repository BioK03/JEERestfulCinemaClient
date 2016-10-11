var Movie = {
    getList: function(data) {
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
				+'<tr>'
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

};