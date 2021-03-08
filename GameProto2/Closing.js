function close() {
  var end = document.getElementById("end");
  var name = localStorage.getItem("agentName");
  end.innerHTML =
    "Well done, Agent <b>" +
    name +
    "</b>! Thanks to you, the universe is safe... for now!";
}

window.onload = close();
