  onDeviceReady: function() {
window.document.getElementById("processJSON").addEventListener("click", processJSON);
},


function processJSON(){
	var rawFile= new XMLHttpRequest();
	rawFile.open("GET",'userdata.json', false);
	var allText="";
	rawFile.onreadystatechange= function()
	{
		if(rawFile.readyState === 4 )
		{
			if(rawFile.status === 200 || rawFile.status == 0){
				allText = rawFile.responseText;

			}
		}
	}
	rawFile.send(null);
}