document.getElementById("button").addEventListener("click",fn);
function fn(){
	var num = document.getElementById("input").value;
	var num = parseInt(num);

	for(var i = 0; i < num; i++){
		alert(i);
	}
}