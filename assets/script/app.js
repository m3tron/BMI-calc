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

queryURL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=path+of+exile&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCo0muFnSg2iOmivzJSgDYm9CGB3t-_mmw";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  var videoLink = "https://www.youtube.com/watch?v=";
});
