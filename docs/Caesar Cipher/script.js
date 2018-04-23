// document.getElementById("buttonEncode").addEventListener("click", encode);

function gARRRY() {
  var yUSewExtraSamir = inputMessage.value
  var meh;
  var arr = [];
	for(j = 0; j<26; j++){
	  meh = j;
	  console.log(meh);
	  for(i = 0; i < yUSewExtraSamir.length; i++){
	  	var nathanLEIBO = yUSewExtraSamir.charCodeAt(i)
	  	if(nathanLEIBO > 64 && nathanLEIBO < 91){
	  		nathanLEIBO = nathanLEIBO - 65;
	  		meh = parseInt(meh);
	  		nathanLEIBO = (nathanLEIBO + meh)%26;
	  		nathanLEIBO = nathanLEIBO + 65;
	  		nathanLEIBO = parseInt(nathanLEIBO);
	  		console.log(String.fromCharCode(nathanLEIBO));
	  		arr.push(String.fromCharCode(nathanLEIBO));
	  	}else if(nathanLEIBO > 96 && nathanLEIBO < 123){
	  		nathanLEIBO = nathanLEIBO - 97;
	  		meh = parseInt(meh);
	  		nathanLEIBO = (nathanLEIBO + meh)%26;
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
	  console.log(meh);
	  document.getElementById(meh).innerHTML = arr.join("");
	  arr = [];
	  console.log(arr);
	}
}

/* Getting the ASCII value from a character in a string:
  var x = "Hello World";        Start with a string variable
  var xVal = x.charCodeAt(0)   Call the charCodeAt method on the string object
                                The parameter it takes is a position in the string
                                e.g. 0 is H, 1 is e, 2 is l, etc
                                It will return the ASCII value of the character in that position
  console.log(xVal)             Prints: 72 to the console
*/