var Movie = {
    getList: function(json) {
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
			
		JSON.parse(json).forEach(function(value) {
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
		return result;
	},
    test: '[{"noMovie":1,"budget":17531000,"duration":110,"incomings":69250000,"releaseDate":"1994-04-14","title":"LÃ©on","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},{"noMovie":2,"budget":18340000,"duration":100,"incomings":60340000,"releaseDate":"2008-04-23","title":"Cash","director":{"noRea":4,"firstnameRea":"Eric","lastnameRea":"Besnard"},"category":{"catCode":"PO","wording":"Policier"}},{"noMovie":3,"budget":7227000,"duration":132,"incomings":51258000,"releaseDate":"1966-12-01","title":"La grande vadrouille","director":{"noRea":2,"firstnameRea":"Claude","lastnameRea":"Chabrol"},"category":{"catCode":"AC","wording":"Action"}},{"noMovie":4,"budget":10567000,"duration":104,"incomings":70500000,"releaseDate":"1985-04-10","title":"Subway","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}}]',

};