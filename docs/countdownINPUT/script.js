var button1 = document.getElementById("b1");
button1.addEventListener("click", getTime);
function getTime(){
var today = new Date();
var final = new Date(document.getElementById("button").value);
var timeee = parseInt(final-today);
document.getElementById('t').innerHTML = (final-today)/(1000*60*60*24);
}