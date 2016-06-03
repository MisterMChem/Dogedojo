$(document).ready(function(){
	var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  console.log(user.displayName);
} else {
  // No user is signed in.
}

});