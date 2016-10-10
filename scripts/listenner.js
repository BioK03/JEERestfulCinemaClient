$(document).ready(function(){
    declareEvents();
});


function declareEvents(){
	$('[data-toggle="popover"]').popover();
	$('.datatable').DataTable();
}