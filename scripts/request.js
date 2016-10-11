function request(url) {
	var baseUrl = "http://localhost:8080/cinema/";	
	var req = new XMLHttpRequest();
	req.open('GET', baseUrl+url, true);
	req.onreadystatechange = function (aEvt) {
		if(req.readyState == 4)
		{
			if(req.status == 200)
			{
				return JSON.parse(req.responseText);
			}
			else
			{
				console.error("Erreur XHR");
			}
		}
	}
	req.send(null);
}