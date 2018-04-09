var button = document.getElementById("silly");
button.addEventListener("click",buttonPress);
var BILLIAm = 0;

function buttonPress(){
	BILLIAm++;
	if(BILLIAm%2 == 1) {
	document.getElementById("scriptable").innerHTML = "make it blue";
	document.body.style.backgroundColor = "red"
	}
	if(BILLIAm%2 == 0) {
	document.getElementById("scriptable").innerHTML = "make it red";
	document.body.style.backgroundColor = "blue"
	}
}