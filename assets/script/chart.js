function renderChart() {
  var userBmi = retrieveBmi();

  var userDate = retrieveDate();
  var userWeight = retrieveWeight();

  /* setTimeout(function(){

  }) */

  console.log(userBmi);
  chartInfo(userDate, userBmi);
}

function chartInfo(xdata, ydata) {
  var ctx = $("#myChart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xdata,
      datasets: [
        {
          label: "BMI",
          data: ydata,
          backgroundColor: "rgba(153,255,51,0.4)"
        }
      ]
    }
  });
}
