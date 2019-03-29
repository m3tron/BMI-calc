function renderChart() {
  var userBmi = retrieveBmi();

  var userDate = retrieveDate();
  var userWeight = retrieveWeight();

  /* setTimeout(function(){

  }) */
  console.log(userBmi);
  chartInfo(userBmi);
}

function chartInfo(yyy) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["A", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "BMI",
          data: [1, 2, 3, 4, 5],
          backgroundColor: "rgba(153,255,51,0.4)"
        }
      ]
    }
  });
}
