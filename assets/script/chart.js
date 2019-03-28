function renderChart() {
  /* var userBmi = retrieveBmi();

  var userDate = retrieveDate();
  var userWeight = retrieveWeight();
 */
  /* setTimeout(function(){

  }) */
  chartInfo();
}

function chartInfo(yData) {
  var ctx = $("#myChart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 3, 8, 9],
      data: [
        {
          label: "num",
          data: retrieveBmi()
        }
      ]
    },
    options: {}
  });
}
