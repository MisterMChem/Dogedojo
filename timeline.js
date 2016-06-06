$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var token = firebase.auth().currentUser.uid;
      queryDatabase(token);
    } else {
      // No user is signed in.
      window.location = "index.html";
    }
});
});


function queryDatabase(token) {
  firebase.database().ref('/Posts/').once('value').then(function(snapshot) {
    var PostObject = snapshot.val();
    var keys = Object.keys(PostObject);
    var currentRow;
    for (var i = 0; i< keys.length; i++) {
      var currentObject = PostObject[keys[i]];
      if (i % 3 == 0) {
        currentRow = document.createElement("div");
        $(currentRow).addClass("row");
        $("#contentHolder").append(currentRow);
      }
      var col = document.createElement("div");
      $(col).addClass("col-lg-4");
      var image = document.createElement("img");
      image.src = currentObject.url;
      $(image).addClass("contentImage");
      var p = document.createElement("p");
      $(p).html(currentObject.caption);
      $(p).addClass("contentCaption");
      $(col).append(image);
      $(col).append(p);
      $(currentRow).append(col);
      //create new row on every third entry
      //col-lg-4
    }
    // ...
  });

}
