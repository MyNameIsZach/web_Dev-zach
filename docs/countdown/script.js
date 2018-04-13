var today = new Date();
var graduation = new Date(2018, 5, 15);
var timeee = parseInt(graduation-today);
document.getElementById('t').innerHTML = (graduation-today)/(1000*60*60*24);