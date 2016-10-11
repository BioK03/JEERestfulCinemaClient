var Actor = {
	getList: function() {
		var data = Actor.test;
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Numéro acteur</th>'
			+'			<th>Nom</th>'
			+'			<th>Prenom</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		data.forEach(function(value) {
			result += ''
				+'<tr class="hoverable" data-action="" data-args="">'
				+'	<td>'+value.noAct+'</td>'
				+'	<td>'+value.lastnameAct+'</td>'
				+'	<td>'+value.firstnameAct+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		return result;
	},
	getDetails: function() {
		var data = Actor.test;
		var result = ''
			+'Numéro acteur : '+data[0].noAct
			+'Prénom : '+data[0].firstnameAct
			+'Nom : '+data[0].lastnameAct
			+'Date de naissance : '+data[0].birthdate
			+(data[0].deathdate)?'Date de décès : '+data[0].deathdate:''
			+(data[0].picture)?'<img src="'+data[0].picture+'"/>':'';
		return result;
	},
	test: JSON.parse('[{"noAct":1,"birthdate":"1948-07-30","firstnameAct":"Jean","lastnameAct":"Reno"},{"noAct":5,"birthdate":"1981-06-09","firstnameAct":"Natalie","lastnameAct":"Portman"},{"noAct":7,"birthdate":"1972-06-19","firstnameAct":"Jean","lastnameAct":"Dujardin"},{"noAct":8,"birthdate":"1917-07-27","deathdate":"1970-09-23","firstnameAct":"","lastnameAct":"Bourvil"},{"noAct":12,"birthdate":"1914-07-31","deathdate":"1983-01-27","firstnameAct":"Louis","lastnameAct":"De Funes"},{"noAct":13,"birthdate":"1955-07-29","firstnameAct":"Jean-Hugues","lastnameAct":"Anglade"},{"noAct":15,"birthdate":"1957-03-29","firstnameAct":"Christophe","lastnameAct":"Lambert"}]'),
};