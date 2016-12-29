function compile(){
	var html=document.getElementById("html");
	var css=document.getElementById("css");
	var js=document.getElementById("js");
	var result=document.getElementById("result").contentWindow.document;
	document.body.onkeydown=function(){
		console.log("hello")
		result.open();
		result.writeln(html.value);
		result.close();
	}
}
compile();