document.getElementById("btn").onclick = function() {addName()};

function addName() {
  var person = prompt("Please Enter Your Name.", "영애");

  if (person != null) {
      document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
  }
}