var Director = {
    getList: function(json) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Numéro réalisateur</th>'
			+'			<th>Prénom</th>'
            +'			<th>Nom</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Numéro réalisateur</th>'
			+'			<th>Prénom</th>'
            +'			<th>Nom</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		JSON.parse(json).forEach(function(value) {
			result += ''
				+'<tr>'
				+'	<td>'+value.noRea+'</td>'
                +'	<td>'+value.firstnameRea+'</td>'
				+'	<td>'+value.lastnameRea+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		return result;
	},
    test: '[{"noRea":1,"firstnameRea":"GÃ©rard","lastnameRea":"Oury"},{"noRea":2,"firstnameRea":"Claude","lastnameRea":"Chabrol"},{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},{"noRea":4,"firstnameRea":"Eric","lastnameRea":"Besnard"}]',

};