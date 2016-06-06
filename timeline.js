$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
		var currentToken = sessionStorage.token;
		var currentUser = user.currentUser;
  		if (currentUser && currentToken == user.uid) {
    		// User is signed in.
    		  console.log(user.displayName);

  		} else {
    		// No user is signed in.
  		}
	});

});