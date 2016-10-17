var Global = {
	getSearchResults: function(data){
        var result = "";

        if(data.movies.length == 0){
            result += "<h3>Pas de film correspondant à cette recherche</h3>"
        }else{
            result += `<h3>Films : </h3>
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
			
            data.movies.forEach(function(value) {
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
        }

        if(data.personages.length == 0){
            result += "<h3>Pas de personnage correspondant à cette recherche</h3>"
        }else{
            result += `<h3>Personnages : </h3>
                <table id="tab" class="table table-striped table-bordered datatable">
                    <thead>
                        <tr>
                            <th>Film</th>
                            <th>Acteur</th>
                            <th>Personnage</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Film</th>
                            <th>Acteur</th>
                            <th>Personnage</th>
                        </tr>
                    </tfoot>
                    <tbody>`;
                
            data.personages.forEach(function(value) {
                result += ''
                    +'<tr>'
                    +'	<td class="hoverable" data-action="movieDetails" data-args="'+value.movie.noMovie+'">'+value.movie.title+'</td>'
                    +'	<td class="hoverable" data-action="actorDetails" data-args="'+value.actor.noAct+'">'+value.actor.firstnameAct+' '+value.actor.lastnameAct+'</td>'
                    +'	<td>'+value.persName+'</td>'
                    +'</tr>';
            });
            result += '</tbody> </table>'
        }
        
        if(data.actors.length == 0){
            result += "<h3>Pas d'acteur correspondant à cette recherche</h3>"
        }else{
            result += `<h3>Acteurs : </h3>
               <table id="tab" class="table table-striped table-bordered datatable">
				<thead>
					<tr>
						<th>Numéro acteur</th>
						<th>Nom</th>
						<th>Prenom</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Numéro acteur</th>
						<th>Nom</th>
						<th>Prenom</th>
					</tr>
				</tfoot>
				<tbody>`;
			
            data.actors.forEach(function(value) {
                result += ''
                    +'<tr class="hoverable" data-action="actorDetails" data-args="'+value.noAct+'">'
                    +'	<td>'+value.noAct+'</td>'
                    +'	<td>'+value.lastnameAct+'</td>'
                    +'	<td>'+value.firstnameAct+'</td>'
                    +'</tr>';
            });
            result += '</tbody> </table>';
        }

        if(data.directors.length == 0){
            result += "<h3>Pas de réalisateur correspondant à cette recherche</h3>"
        }else{
            result += `<h3>Réalisateurs : </h3>
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
			
            data.directors.forEach(function(value) {
                result += ''
                    +'<tr class="hoverable" data-action="directorDetails" data-args="'+value.noRea+'">'
                    +'	<td>'+value.noRea+'</td>'
                    +'	<td>'+value.firstnameRea+'</td>'
                    +'	<td>'+value.lastnameRea+'</td>'
                    +'</tr>';
            });
            result += '</tbody> </table>';
        }

        if(data.categories.length == 0){
            result += "<h3>Pas de catégorie correspondante à cette recherche</h3>"
        }else{
            result += `<h3>Catégories : </h3>
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
			
            data.categories.forEach(function(value) {
                result += ''
                    +'<tr class="hoverable" data-action="categoryDetails" data-args="'+value.catCode+'">'
                    +'	<td>'+value.catCode+'</td>'
                    +'	<td>'+value.wording+'</td>'
                    +'</tr>';
            });
            result += '</tbody> </table>'
        }
        


        printResults("#mainContent", result);
    }
};