function renderChart() {
  retrieveBmi();
  var userBmi = beemer;
  var userDate = retrieveDate();
  var userWeight = retrieveWeight();
  console.log(userBmi);

  setTimeout(function() {
    chartInfo(userBmi);
  }, 2000);
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
          data: yData
        }
      ]
    },
    options: {}
  });
}
