// document.write('<h1>hellow b</h1>');
// console.log(document);
// console.log(window);
// var scriptables = document.getElementById("scriptable");
// console.log(scriptables.innerHTML);

// function vlad (x,y){
// 	return x * x + y % x;
// }

// var temp = samir(2,3);
var button = document.getElementById("silly");
button.addEventListener("click",buttonPress);
var BILLIAm = 0;

function buttonPress(){
	BILLIAm++;
	document.getElementById("scriptable").innerHTML = "You pressed the button " + BILLIAm + " times";
	if(BILLIAm == 1) {
	document.getElementById("scriptable").innerHTML = "You pressed the button 1 time";
	}
}