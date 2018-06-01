var config = {
apiKey: "AIzaSyCItJk-gZJEKrc1_EeojSu34aYjjzj9u1k",
authDomain: "list-a71e9.firebaseapp.com",
databaseURL: "https://list-a71e9.firebaseio.com",
projectId: "list-a71e9",
storageBucket: "list-a71e9.appspot.com",
messagingSenderId: "535106653853"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(result);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
firebase.database().ref('HELLO').once('value',function(snapshot){
	console.log(snapshot.val());
})

document.getElementById("addElement").addEventListener("return", function(e) {
	console.log(e);
	addElement();
});
document.getElementById("inputElement").addEventListener("keypress", function(e){
	if(e.key == "Enter"){
		addElement();
	}
});
function addElement() {
	var input = document.getElementById("inputElement").value;
	var x = document.createElement("li");
	var t = document.createTextNode(input);
	x.appendChild(t);
	document.getElementById("output").appendChild(x);
	if(input.charCodeAt(0) == 65 || input.charCodeAt(0) == 69|| input.charCodeAt(0) == 73|| input.charCodeAt(0) == 79|| input.charCodeAt(0) == 85|| input.charCodeAt(0) == 89|| input.charCodeAt(0) == 97|| input.charCodeAt(0) == 101|| input.charCodeAt(0) == 105|| input.charCodeAt(0) == 111|| input.charCodeAt(0) == 117|| input.charCodeAt(0) == 121){
		x.setAttribute("class","vowel");
	}
	document.getElementById("inputElement").value = "";
	firebase.database().ref('HELLO').set("My very young child does not behave in a silly or playful way For the reason that she possesses an intense feeling of deep affection for me so And this I am aware of through observation fo shooooo But does she really have a desire to possess it But cannot tolerate to perceive me  Exeunt out the hinged barrier at the entrance to the building Do not make an effort to take part in a violent struggle against the emotional state or reaction For the reason that this idea produced by thinking along is causing me death, especially deliberately right now Express gratitude to the creator and ruler of the universe for mom and dad For remaining through with in proximity to each other For the reason that we don't possess the knowledge of the way or manner Casual greetings, affirmitation! Casual greetings, affirmitation! Casual greetings, affirmitation! Casual greetings, affirmitation! You have a particular opinion that you are įn possession of it Oh you have a particular opinion that you are įn possession of it But possession of it just doesn’t guarantee possession");
}