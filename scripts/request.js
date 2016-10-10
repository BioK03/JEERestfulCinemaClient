function request (url) {
	var baseUrl = "http://";	
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
				console.log("erreur XHR");
			}
		}
	}
	req.send(null);
}