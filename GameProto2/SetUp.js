function set() {
  var setDiv = document.getElementById("startGame");
  var setName = document.getElementById("agentName").value;
  localStorage.setItem("agentName", setName);
  var name = localStorage.getItem("agentName");
  var alpha = document.getElementById("alpha").value;
  localStorage.setItem("alpha", alpha);
  var beta = document.getElementById("beta").value;
  localStorage.setItem("beta", beta);
  var gamma = document.getElementById("gamma").value;
  localStorage.setItem("gamma", gamma);
  setDiv.innerHTML =
    "Pleasure to meet you, <b>" +
    name +
    "</b>! Press start to start <a href=Embodiment.html><button> Start!</button>";
}

var startButton = document.getElementById("setComplete");
startButton.addEventListener("click", set);
