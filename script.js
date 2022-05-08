function add() {
  var x = document.getElementById("first_number").value;
  var y = document.getElementById("second_number").value;
  var sum = parseInt(x) + parseInt(y);
  document.getElementById("answer").innerHTML = sum;
}

function substract() {
  var x = document.getElementById("first_number").value;
  var y = document.getElementById("second_number").value;
  var sum = parseInt(x) - parseInt(y);
  document.getElementById("answer").innerHTML = sum;
}

function clearLog() {
  console.log("callwe");
  document.getElementById("first_number").value = "0";
  document.getElementById("second_number").value = "0";
  document.getElementById("answer").innerHTML = "0";
}

function generateTable() {
  var table;
  table = '<table id="mtable">';

  var num = document.getElementById("number_table").value;
  if (num == null || num == "") num = 1;
  for (i = 1; i <= 10; i++) {
    table += "<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>";
  }

  table += "</table>";
  document.getElementById("result").innerHTML = table;
}
