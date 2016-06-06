$(document).ready(function(){
	var user = sessionStorage.token;
	var currentUser = firebase.auth().currentUser;

if (currentUser && currentUser.uid == user) {
  // User is signed in.
  console.log(user.displayName);
} else {
  // No user is signed in.
  window.location = "index.html";
}

});