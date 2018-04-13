var output = document.getElementById("output");
var button1 = document.getElementById("b1");
button1.addEventListener("click", buttonAdd);
var button2 = document.getElementById("b2");
button2.addEventListener("click", buttonSubtract);
var button3 = document.getElementById("b3");
button3.addEventListener("click", buttonMultiply);
var button4 = document.getElementById("b4");
button4.addEventListener("click", buttonDivide);
var button5 = document.getElementById("b5");
button5.addEventListener("click", buttonExponent);
var button6 = document.getElementById("b6");
button6.addEventListener("click", buttonMod);

function buttonAdd(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1+val2;
	output.innerHTML = answer;
}
function buttonSubtract(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1-val2;
	output.innerHTML = answer;
}
function buttonMultiply(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1*val2;
	output.innerHTML = answer;
}
function buttonDivide(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1/val2;
 	output.innerHTML = answer;
}
function buttonExponent(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1**val2;
 	output.innerHTML = answer;
}
function buttonMod(){
	var val1 = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	val1 = parseInt(val1);
	val2 = parseInt(val2);
	var answer = val1%val2;
 	output.innerHTML = answer;
}