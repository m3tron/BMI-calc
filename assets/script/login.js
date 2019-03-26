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
    console.log("logged IN ", user);
    //window.location.replace("index.html");
  } else {
    console.log("not logged in ", user);
    //window.location.replace("login.html");
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
      console.log(error.code, error.message);
    });
}
