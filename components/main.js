function compile(){
	var html=document.getElementById("html");
	var css=document.getElementById("css");
	var js=document.getElementById("js");
	var result=document.getElementById("result").contentWindow.document;
	document.body.onkeyup=function(){
		result.open();
		result.writeln(html.value+"<style>"+css.value+"</style>"+"<script>"+js.value+"</script>");
		result.close();
	}
}
compile();