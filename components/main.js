function compile(){
	var html=document.getElementById("html");
	var css=document.getElementById("css");
	var js=document.getElementById("js");
	document.body.onkeydown=function(){
		result.open();
		result.write();
		result.close();
	}
}
compile();