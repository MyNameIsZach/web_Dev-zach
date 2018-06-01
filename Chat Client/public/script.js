var name;

//Begin the login process and set up the listener for new messages
login(start, recieveMessage);
//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	name = user.name;
	document.getElementById("sendMessage").addEventListener("click", send);
	document.getElementById("mySelect").addEventListener("scroll", function(){
		var select1 = document.getElementById("mySelect").scrollTop;
		document.getElementById("yourSelect").scrollTop = select1;
		console.log(select1);
	});
	document.getElementById("yourSelect").addEventListener("scroll", function(){
		var select1 = document.getElementById("yourSelect").scrollTop;
		document.getElementById("mySelect").scrollTop = select1;
		console.log(select1);
	});
	// window.addEventListener("resize", function(){
	// 	var w = window.innerHeight;
	// 	document.getElementById("yourSelect").style.height = (w*.7)+"px";
	// 	//get window size and store in var
	// 	//set the select height based on that var
	// }); 
}
//This function runs every time you recieve a message. It will run for every message already in the database.
//THe message information is passed to you in the variable 'message'
function recieveMessage(message) {
	console.log("message.name =" + message.name);
	console.log("name =" + name);
	if(name == message.name){
		console.log(message);
		// console.log(message.content);
		var billiam = message.content;
		// document.getElementById("garrison").innerHTML = message.content;
		var x = document.getElementById("yourSelect");
		// console.log(x);
		var blah = document.createElement("option");
		var annoying = document.createElement("option");
		// console.log(blah)
		blah.text = message.name + ': ' + billiam;
		blah.setAttribute("disabled", true);
		annoying.setAttribute("disabled", true);
		annoying.text = "";
		// console.log(billiam);
		x.add(blah);
		// var annoying = " ";
		document.getElementById("mySelect").add(annoying);
		document.getElementById("yourSelect").scrollTop = 5000;
		console.log(billiam.length);
	}else{
		console.log(message);
		// console.log(message.content);
		var billiam = message.content;
		// document.getElementById("garrison").innerHTML = message.content;
		var x = document.getElementById("mySelect");
		// console.log(x);
		var blah = document.createElement("option");
		var annoying = document.createElement("option");
		// console.log(blah)
		blah.text = message.name + ': ' + billiam;
		blah.setAttribute("disabled", true);
		annoying.setAttribute("disabled", true);
		annoying.text = "";
		// console.log(billiam);
		// x.add(blah);
		x.add(blah);
		// var annoying = " ";
		document.getElementById("yourSelect").add(annoying);
		document.getElementById("mySelect").scrollTop = 5000;
		console.log(billiam.length);
	}	
}
//The sendMessage('text') function will send a message from you to the database.
function send() {
	var billiam = document.getElementById("Vlad").value;
	if(billiam.length < 100){//make it so it blocks the "<" key
		for(var i = 0; i < billiam.length; i++){
			i = parseInt(i);
			console.log("length is " + (i+1));
		}
		sendMessage(billiam);
	}
}