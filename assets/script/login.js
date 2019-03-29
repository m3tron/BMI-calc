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
    console.log("logged IN ", userId + " " + email, user);
    $("#loginPage").hide();
    $("#mainPage").show();
  } else {
    console.log("not logged in ", user);
    $("#mainPage").hide();
    $("#loginPage").show();
  }
});

function signUpNewUser(email, password, resolve) {
  auth.createUserWithEmailAndPassword(email, password);
  console.log(resolve);
  console.log("1");
  resolve();
}

function loginUser(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(function(userInfo) {})
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code + "space" + error.message);
    });
}
