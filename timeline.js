$(document).ready(function(){
	var user = sessionStorage.token;

if (user) {
  // User is signed in.
  console.log(user.displayName);
} else {
  // No user is signed in.
}

});