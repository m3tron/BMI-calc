function writeUserData(userId, email) {
  database.ref("users/" + userId).set({
    email: email
  });
}

function populateList(userId, weight, bmi) {
  database.ref("users/" + userId + "/userData/").push({
    weight: weight,
    bmi: bmi,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
}
var beemer = [];
function retrieveBmi() {
  var data = database.ref("users/" + userId + "/userData/");
  var bmiList = [];
  data.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var childBmi = childData.bmi;
      bmiList.push(parseFloat(childBmi));
    });
  });

  return bmiList;
}

function retrieveDate() {
  var data = database.ref("users/" + userId + "/userData/");
  var dateList = [];
  data.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var childDate = childData.dateAdded;
      dateList.push(childDate);
    });
  });
  return dateList;
}

function retrieveWeight() {
  var data = database.ref("users/" + userId + "/userData/");
  var weightList = [];
  data.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      var childWeight = childData.weight;
      weightList.push(childWeight);
    });
  });
  return weightList;
}

function listylist() {
  var yolo = retrieveBmi();
  console.log(yolo);
}

function fixList(arr) {
  arr.pop();
  console.log(arr);
  return arr;
}
