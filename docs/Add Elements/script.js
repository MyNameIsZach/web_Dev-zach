document.getElementById("addElement").addEventListener("click", addElement);
function addElement() {
	var input = document.getElementById("inputElement").value;
	var x = document.createElement("li");
	var t = document.createTextNode(input);
	x.appendChild(t);
	document.getElementById("output").appendChild(x);
	console.log();
	
	if(input.charCodeAt(0) == 65 || input.charCodeAt(0) == 69|| input.charCodeAt(0) == 73|| input.charCodeAt(0) == 79|| input.charCodeAt(0) == 85|| input.charCodeAt(0) == 89|| input.charCodeAt(0) == 97|| input.charCodeAt(0) == 101|| input.charCodeAt(0) == 105|| input.charCodeAt(0) == 111|| input.charCodeAt(0) == 117|| input.charCodeAt(0) == 121){
		x.setAttribute("class","vowel");
	}
	document.getElementById("inputElement").value = "";
}