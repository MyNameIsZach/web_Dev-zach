document.getElementById("buttonEncode").addEventListener("click", encode);

var buttonBOI = 0;

function encode() {
  var yUSewExtraSamir = inputMessage.value;
  var meh = inputKey.value;
  var arr = [];
	  for(i = 0; i < yUSewExtraSamir.length; i++){
	  	var nathanLEIBO = yUSewExtraSamir.charCodeAt(i)
	  	var tedTheTedster = meh.charCodeAt(i%meh.length)
	  	if(tedTheTedster > 64 && tedTheTedster < 91){
	  		var yarrowE = tedTheTedster - 65;
	  	}else if(tedTheTedster > 96 && tedTheTedster < 123){
			var yarrowE = tedTheTedster - 97;
	  	}else{
			var yarrowE = 0;
	  	}
	  	console.log(yarrowE);
	  	if(nathanLEIBO > 64 && nathanLEIBO < 91){
	  		nathanLEIBO = nathanLEIBO - 65;
	  		yarrowE = parseInt(yarrowE);
	  		nathanLEIBO = (nathanLEIBO + yarrowE)%26;
	  		nathanLEIBO = nathanLEIBO + 65;
	  		nathanLEIBO = parseInt(nathanLEIBO);
	  		console.log(String.fromCharCode(nathanLEIBO));
	  		arr.push(String.fromCharCode(nathanLEIBO));
	  	}else if(nathanLEIBO > 96 && nathanLEIBO < 123){
	  		nathanLEIBO = nathanLEIBO - 97;
	  		yarrowE = parseInt(yarrowE);
	  		nathanLEIBO = (nathanLEIBO + yarrowE)%26;
	  		nathanLEIBO = nathanLEIBO + 97;
	  		nathanLEIBO = parseInt(nathanLEIBO);
	  		console.log(String.fromCharCode(nathanLEIBO));
	  		arr.push(String.fromCharCode(nathanLEIBO));
	  	}else{
	  		nathanLEIBO = parseInt(nathanLEIBO);
	  		console.log(String.fromCharCode(nathanLEIBO));
	  		arr.push(String.fromCharCode(nathanLEIBO));
	  	}
	  }
	  buttonBOI = parseInt(buttonBOI);
	  document.getElementById(buttonBOI).innerHTML = arr.join("");
	  buttonBOI ++;
}

/* Getting the ASCII value from a character in a string:
  var x = "Hello World";        Start with a string variable
  var xVal = x.charCodeAt(0)   Call the charCodeAt method on the string object
                                The parameter it takes is a position in the string
                                e.g. 0 is H, 1 is e, 2 is l, etc
                                It will return the ASCII value of the character in that position
  console.log(xVal)             Prints: 72 to the console
*/