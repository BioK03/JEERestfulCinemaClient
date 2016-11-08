function declareEvents(){
	console.info("Events refreshed");
	$('[data-toggle="popover"]').popover({
		container: 'body'
	});
	$('.datatable').DataTable({
		"language": {
			"sProcessing":     "Traitement en cours...",
			"sSearch":         "Rechercher&nbsp;:",
			"sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
			"sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
			"sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
			"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
			"sInfoPostFix":    "",
			"sLoadingRecords": "Chargement en cours...",
			"sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
			"sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
			"oPaginate": {
				"sFirst":      "Premier",
				"sPrevious":   "Pr&eacute;c&eacute;dent",
				"sNext":       "Suivant",
				"sLast":       "Dernier"
			},
			"oAria": {
				"sSortAscending":  ": activer pour trier la colonne par ordre croissant",
				"sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
			}
		}
	});

	$('.datepicker').datepicker({format: 'yyyy-mm-dd'});

	$(".inputPicture").keyup(function() {
  		 $(".picturepreview").attr("src", $(this).val());
	});

	$(".clickable[data-action], .hoverable[data-action]").unbind('click').click(function(){
		dispatcher($(this).data("action"), $(this).data("args"));
	});
}

function formToPostString() {
	var result = "";
	$(".form input[name] , .form select[name] ").each(function(index, value){
		result+=((index == 0)?'':'&')+$(this).attr("name")+'='+$(this).val();
	});
	return result;
}