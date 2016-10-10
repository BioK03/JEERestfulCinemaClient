var Category = {
    getList: function(json) {
		var result = ''
			+'<table id="tab" class="table table-striped table-bordered datatable">'
			+'	<thead>'
			+'		<tr>'
			+'			<th>Code de catégorie</th>'
			+'			<th>Libellé</th>'
			+'		</tr>'
			+'	</thead>'
			+'	<tfoot>'
			+'		<tr>'
			+'			<th>Code de catégorie</th>'
			+'			<th>Libellé</th>'
			+'		</tr>'
			+'	</tfoot>'
			+'	<tbody>';
			
		JSON.parse(json).forEach(function(value) {
			result += ''
				+'<tr>'
				+'	<td>'+value.catCode+'</td>'
				+'	<td>'+value.wording+'</td>'
				+'</tr>';
		});
		result += '</tbody> </table>'
		return result;
	},
    test: '[{"catCode":"AC","wording":"Action"},{"catCode":"CO","wording":"ComÃ©die"},{"catCode":"PO","wording":"Policier"},{"catCode":"WE","wording":"Western"}]',
};