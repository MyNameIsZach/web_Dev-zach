var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);

function buttonPress(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	console.log(val1+val2);
}