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

$(document).ready(function() {
  $("#BMI-Submit").on("click", function(e) {
    e.preventDefault();
    //BMI calculation
    var weight = $("#weight").val();
    var height = $("#height").val();
    var bmi = (weight / Math.pow(height, 2)).toFixed(2);
    $("#firstCard").text("Your BMI is: " + bmi);
    $("#firstCard").append(
      "<br>" +
        "Click here to go to your results " +
        "<button type='submit' class='btn btn-primary' id='resultsPage'>Click Here</button>"
    );
    $("#resultsPage").on("click", function() {
      showResults(bmi);
    });
  });

  //function that displays results 
  function showResults(bmi) {
    if (bmi < 18.5) {
      $("#main").empty();
      $("#main").append(
        "<p>The Risks of Being Underweight: Being underweight can cause as many health concerns to an individual as being overweight can. Being underweight causes your body to not get nutrients that is desperately needs to build healthy bones, hair etc.<br> Due to this you can face skin or hair problems causing poor dental health or hair loss. Your body can tend to feel tired all of the time due to the lack of calories your body needs to produce energy. A more serious result of being understand is Osteporosis, causing the bones to become so weak they are more prone to breaking.<br>There are a number of treatment plans an individual can take on to overcome being underweight. Adding snacks high in carbohydrates and eating smaller but more meals throughout the day that are calorie dense will begin to slowly repair your body’s nutrient levels and improve your overall health.</p>"
      );
      showVideos("how to gain weight");
    } else if (18.5 < bmi < 24.9) {
      $("#main").empty();
      $("#main").append("<p>How to Maintain a Healthy BMI: Whatever you have been doing so far to maintain a healthy BMI-keep on following that routine. Regular exercises is crucial for the body to burn calories and build muscles which can in turn help burn more calories even when you’re not working out. It is important to be cautious of what you’re eating as not only does your body need a number of calories a day but it needs the appropriate nutrients as well. Ensure you are giving your body 5 servings of fruits and vegetables a day with the nutrients and minerals you need.</p>");
      showVideos("maintain fitness");
    } else if (25 < bmi < 29.9) {
      $("#main").empty();
      $("#main").append("<p>How To Reduce your BMI to Healthy: Tracking your calories daily can assist you with understanding where your highest calorie dense meals are coming from. It is important you do not drastically reduce your calorie account as your body also needs time to adjust. Removing foods high in carbs and substituting with fruits and vegetables can provide your body with the necessary nutrients but also be light in calories. It is critical you begin working out, after consulting a doctor. Create a workout plan that focuses on cardio and other high intensity workouts that get your heart pumping and causes you to sweat. Consider joining the gym, or a active sport such as swimming or dance. Not only will working out cause your body to burn calories and in turn lose weight you are also helping your heart get stronger. Working out and an overall healthy/active lifestyle will also force you to stay motivated and on track. You have to remember that working out will take time to see progress but you must remember how crucial it is for your body, heart and mind to stay focused.</p>");
      showVideos("overweight tips");
    } else if (bmi >= 30) {
      $("#main").empty();
      $("#main").append("<p>How to fight Obesity: Obesity is a chronic disease that is affecting more and more children. Obesity can begin slow and as your body adjusts to your heavy calorie intakes you may not realize the changes at first. The weight on your body can cause tremendous issues for your heart and organs.  You MUST stay focused with your diet of eating 5-6 servings of fruits and veggies a day and tracking your calories. Its important to weight yourself regularly so you can ensure you are staying on track and seeing results. You should aim to accumulate atleast 30 minutes of cardio workouts every day of the week.  It can be helpful to get a personal trainer in this time to keep you on track.</p>");
      showVideos("training obese clients");
    }
  }
 
  //function to display videos
  function showVideos(r) {
    query = r;
    queryURL =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
      query +
      "&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCo0muFnSg2iOmivzJSgDYm9CGB3t-_mmw";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
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
        $("#main").append(newDiv);
        $(".thumbClick").on("click", function() {
          //removes current content
          $("#main").empty();
          var videoLink = $(this).attr("vId");
          //embeds clicked video
          $("#main").append(
            "<iframe width='640' height='390' src=" +
              videoLink +
              "?enablejsapi=1&&origin=https://example.com></iframe>"
          );
        });
      }
    });
  }
});
