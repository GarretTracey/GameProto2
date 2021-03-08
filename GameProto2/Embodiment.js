function alpha() {
  var alphaStart = document.getElementById("alphaStart");
  var alpha = localStorage.getItem("alpha");
  alphaStart.innerHTML = "<b>" + alpha + "</b>";
}

window.onload = alpha();

function Embodiment() {
  var name = localStorage.getItem("agentName");
  var embodimentDiv = document.getElementById("embodimentStory");
  var alpha = localStorage.getItem("alpha");
  var verb = document.getElementById("verb").value;
  var location = document.getElementById("location").value;
  var time = document.getElementById("time").value;
  embodimentDiv.innerHTML =
    "<h3> Embodiment Story </h3>" +
    "<div> Agent <b>" +
    name +
    "</b> knew something was wrong the moment they awoke in the <b>" +
    location +
    "</b>. they had not meant to shift there, they didn’t even know where they were. 'Something’s wrong,'they said. They stumbled around for <b>" +
    time +
    "</b> trying to figure out what had brought them there. Suddenly, as if to spite any worldy physics, the entire world began <b>" +
    verb +
    "</b> around Agent <B>" +
    name +
    "</b>, a forced shift in the multiverse. They reached out, trying to see the cause, but all they saw was a grotesque <b>" +
    alpha +
    "</b>.</div>" +
    "<div> <p> When everyone has shared their universe, continue to the next act! </p>" +
    "<a href=Sound.html><button>Next Act!</button></a></div>";
}

var embodimentButton = document.getElementById("generateEmbodiment");
embodimentButton.addEventListener("click", Embodiment);
