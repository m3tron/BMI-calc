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

$("#BMI-Submit").on("click", function() {
  //BMI calculation
  var weight = 75; //$("#weight").val();
  var height = 1.75; //$("#height").val();
  var bmi = (weight / Math.pow(height, 2)).toFixed(2);

  console.log(bmi);
});
function showVideos() {
  query = "batman";
  queryURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
    query +
    "&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCo0muFnSg2iOmivzJSgDYm9CGB3t-_mmw";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var items = response.items;
    var youtubeLink = "https://www.youtube.com/embed/";

    for (var i = 0; i < items.length; i++) {
      //placeholders for video info
      var videoId = youtubeLink + items[i].id.videoId;
      var videoDescription = items[i].snippet.description;
      var videoThumbnail = items[i].snippet.thumbnails.default.url;

      //div that displays thumbnails
      newDiv =
        "<div><img class='thumbClick' vId=" +
        videoId +
        " src=" +
        videoThumbnail +
        ">" +
        videoDescription +
        "</div>";
      $(".container").append(newDiv);
      $(".thumbClick").on("click", function() {
        //removes current content
        $(".container").empty();
        var videoLink = $(this).attr("vId");
        //embeds clicked video
        $(".container").append(
          "<iframe width='640' height='390' src=" +
            videoLink +
            "?enablejsapi=1&&origin=https://example.com></iframe>"
        );
      });
    }
  });
}
