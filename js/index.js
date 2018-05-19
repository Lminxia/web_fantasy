function more(x){
	document.getElementById("fix"+x).style.marginTop="-250px";
	document.getElementById("fix"+x).style.height="460px";	
	document.getElementById("mo"+x).style.display="none";
	document.getElementById("le"+x).style.display="block";

}
function less(y){
	document.getElementById("fix"+y).style.marginTop="0";
	document.getElementById("fix"+y).style.height="220px";
	document.getElementById("mo"+y).style.display="block";	
	document.getElementById("le"+y).style.display="none";
}
