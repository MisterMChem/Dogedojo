$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
		var currentToken = sessionStorage.token;
		var currentUser = firebase.auth().currentUser;
  		if (currentUser && currentToken == currentUser.uid) {
    		// User is signed in.
    		  console.log(currentUser.displayName);

  		} else {
    		// No user is signed in.
  		}
	});

});