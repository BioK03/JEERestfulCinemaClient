var Actor = {
	getList : function(json) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered" width="100%" cellspacing="0">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'			<th>Date de naissance</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'			<th>Date de naissance</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
			json.forEach(function(value) {
			result += ''
				+'<tr>'
				+'	<td>'+value.noAct+'</td>'
				+'	<td>'+value.lastname+'</td>'
				+'	<td>'+value.firstname+'</td>'
				+'	<td>'+value.birthdate+'</td>'
				+'</tr>';
		});
		
		result += '</tbody> </table>'
		return result;
	},
};

$(document).ready(function() {
    $('#tab').DataTable();
}); 