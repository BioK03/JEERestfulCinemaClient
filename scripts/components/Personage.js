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
		return result;
	},
    test: JSON.parse('[{"id":{"noMovie":1,"noAct":1},"persName":"Léon","movie":{"noMovie":1,"budget":17531000,"duration":110,"incomings":69250000,"releaseDate":"1994-04-14","title":"Léon","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":1,"birthdate":"1948-07-30","firstnameAct":"Jean","lastnameAct":"Reno"}},{"id":{"noMovie":1,"noAct":5},"persName":"Mathilda","movie":{"noMovie":1,"budget":17531000,"duration":110,"incomings":69250000,"releaseDate":"1994-04-14","title":"Léon","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":5,"birthdate":"1981-06-09","firstnameAct":"Natalie","lastnameAct":"Portman"}},{"id":{"noMovie":2,"noAct":1},"persName":"Maxime Dubreuil","movie":{"noMovie":2,"budget":18340000,"duration":100,"incomings":60340000,"releaseDate":"2008-04-23","title":"Cash","director":{"noRea":4,"firstnameRea":"Eric","lastnameRea":"Besnard"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":1,"birthdate":"1948-07-30","firstnameAct":"Jean","lastnameAct":"Reno"}},{"id":{"noMovie":2,"noAct":7},"persName":"Cash","movie":{"noMovie":2,"budget":18340000,"duration":100,"incomings":60340000,"releaseDate":"2008-04-23","title":"Cash","director":{"noRea":4,"firstnameRea":"Eric","lastnameRea":"Besnard"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":7,"birthdate":"1972-06-19","firstnameAct":"Jean","lastnameAct":"Dujardin"}},{"id":{"noMovie":3,"noAct":8},"persName":"Augustin Bouvet","movie":{"noMovie":3,"budget":7227000,"duration":132,"incomings":51258000,"releaseDate":"1966-12-01","title":"La grande vadrouille","director":{"noRea":2,"firstnameRea":"Claude","lastnameRea":"Chabrol"},"category":{"catCode":"AC","wording":"Action"}},"actor":{"noAct":8,"birthdate":"1917-07-27","deathdate":"1970-09-23","firstnameAct":"","lastnameAct":"Bourvil"}},{"id":{"noMovie":3,"noAct":12},"persName":"Stanislas Lefort","movie":{"noMovie":3,"budget":7227000,"duration":132,"incomings":51258000,"releaseDate":"1966-12-01","title":"La grande vadrouille","director":{"noRea":2,"firstnameRea":"Claude","lastnameRea":"Chabrol"},"category":{"catCode":"AC","wording":"Action"}},"actor":{"noAct":12,"birthdate":"1914-07-31","deathdate":"1983-01-27","firstnameAct":"Louis","lastnameAct":"De Funes"}},{"id":{"noMovie":4,"noAct":1},"persName":"Le Batteur","movie":{"noMovie":4,"budget":10567000,"duration":104,"incomings":70500000,"releaseDate":"1985-04-10","title":"Subway","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":1,"birthdate":"1948-07-30","firstnameAct":"Jean","lastnameAct":"Reno"}},{"id":{"noMovie":4,"noAct":13},"persName":"Le Roller","movie":{"noMovie":4,"budget":10567000,"duration":104,"incomings":70500000,"releaseDate":"1985-04-10","title":"Subway","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":13,"birthdate":"1955-07-29","firstnameAct":"Jean-Hugues","lastnameAct":"Anglade"}},{"id":{"noMovie":4,"noAct":15},"persName":"Fred","movie":{"noMovie":4,"budget":10567000,"duration":104,"incomings":70500000,"releaseDate":"1985-04-10","title":"Subway","director":{"noRea":3,"firstnameRea":"Luc","lastnameRea":"Besson"},"category":{"catCode":"PO","wording":"Policier"}},"actor":{"noAct":15,"birthdate":"1957-03-29","firstnameAct":"Christophe","lastnameAct":"Lambert"}}]'),
};