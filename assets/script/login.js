// Initialize Firebase
var config = {
  apiKey: "AIzaSyCs-6ABDYOHNe65EtOAIGzWsPzctQiNMAU",
  authDomain: "bmi-calc-fbdee.firebaseapp.com",
  databaseURL: "https://bmi-calc-fbdee.firebaseio.com",
  projectId: "bmi-calc-fbdee",
  storageBucket: "bmi-calc-fbdee.appspot.com",
  messagingSenderId: "102252777650"
};
firebase.initializeApp(config);

var database = firebase.database();
var auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  if (user) {
    userId = user.uid;
    email = user.email;
    console.log("logged IN ", userId + " " + email);
    //event.preventDefault();
    //if (user != null) {
    //location.replace("index.html");
    //} else location.replace("login.html");
    // $("#indexBody").show();
    //$("#loginBody").hide();
  } else {
    console.log("not logged in ", user);
    //event.preventDefault();
    //if (user != null) {
    //location.replace("login.html");
    //} else location.replace("login.html");
    //$("#indexBody").hide();
    //$("#loginBody").show();
    //location.assign("login.html");
  }
});

function signUpNewUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password);
}

function loginUser(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(function(userInfo) {
      //need to clear text boxes after login/signup/signout/etc...
      // $("#inputEmail").text("");
      // $("#inputPassword").text("");
      window.location.replace("index.html");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      //window.location.replace("login.html");
      console.log(error.code + "space" + error.message);
    });
}

function writeUserData(userId, email) {
  database.ref("users/" + userId).set({
    email: email
  });
}

function retrieveList(userId) {
  var getList = database.ref().child("users/" + userId);
  console.log(getList);
  //starCountRef.on("value", function(snapshot) {
  //updateStarCount(postElement, snapshot.val());
  //});
}

function populateList(userId, weight, bmi) {
  database.ref("users/" + userId).push({
    weight: weight,
    bmi: bmi
  });
}
