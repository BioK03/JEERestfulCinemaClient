var Personage = {
    getList: function(data) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Film</th>'
			+'			<th>Acteur</th>'
            +'			<th>Personnage</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Film</th>'
			+'			<th>Acteur</th>'
            +'			<th>Personnage</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		data.forEach(function(value) {
			result += ''
				+'<tr>'
				+'	<td>'+value.movie.title+'</td>'
                +'	<td>'+value.actor.firstnameAct+' '+value.actor.lastnameAct+'</td>'
				+'	<td>'+value.persName+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		printResults("#mainContent", result);
	},
};