document.getElementById("btn").onclick = function() {addName()};

function addName() {
    var person = prompt("Please enter your name.", "polyeffect");
    if (person != null) {
        document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
    }
}