function getJSON(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
		callback(JSON.parse(xmlhttp.responseText));
	};
}

function GetGoogleSheet(id, callback) {
	var url = id.substring(id.indexOf('/d/')+3,id.indexOf('/', id.indexOf('/d/')+3));
	if (url.length <3) url = id;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/" + url + "/od6/public/values?alt=json", true);
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
		callback(JSON.parse(xmlhttp.responseText).feed.entry);
	};
	xmlhttp.send();
};

function getSheet(id, callback) {
	var output = [];
	var url = "https://spreadsheets.google.com/feeds/list/" + id + "/od6/public/values?alt=json";
	getJSON(url, function(data) {   
		var entry = data.feed.entry;
		for (var i = 0; i < entry.length; i++) {
			var row = [];
			var data2 = entry[i].content.$t.split(', _');
			for (var j = 0; j < data2.length; j++) {
				var string = data2[j].substring(data2[j].indexOf(':')+2,data2[j].length).toString();
				if (string != "") row.push(string);
			}
			output.push(row);
		}
		callback(output);
	}); 
};