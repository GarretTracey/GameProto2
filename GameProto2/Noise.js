function beta() {
  var betaStart = document.getElementById("betaStart");
  var beta = localStorage.getItem("beta");
  betaStart.innerHTML = "<b>" + beta + "</b>";
}

window.onload = beta();

function Sound() {
  var noiseDiv = document.getElementById("noiseStory");
  var name = localStorage.getItem("agentName");
  var beta = localStorage.getItem("beta");
  var verbS1 = document.getElementById("verbS1").value;
  var verbS2 = document.getElementById("verbS2").value;
  var verbS3 = document.getElementById("verbS3").value;
  var contraptionS1 = document.getElementById("contraptionS1").value;
  var contraptionS2 = document.getElementById("contraptionS2").value;
  var contraptionS3 = document.getElementById("contraptionS3").value;
  noiseDiv.innerHTML =
    "<h3> Noise Story! </h3>" +
    "<div> Agent <b>" +
    name +
    "</b> knew something had to be done.'This can’t be a coincidence,' they said. Immediately,they began to look for ways to piece it together. It took hours of <b>" +
    verbS2 +
    "</b> until they found signs of Crucius’ <b>" +
    contraptionS1 +
    "</b>. This foul machine was <b>" +
    verbS3 +
    "</b> the nearby area, but Agent <b>" +
    name +
    "</b> knew this was only a piece of the puzzle. 'I haven’t seen something so complex in ages,' they said. they took out their trusty <b>" +
    contraptionS2 +
    "</b> and began <b>" +
    verbS1 +
    "</b> in order to clear the dimensional static. However, they immediately found themselves standing in the middle of a <b>" +
    contraptionS3 +
    "</b>. It was all wrong. They thought they were going to find some mystic <b>" +
    beta +
    "</b>. </div> <div> <p> When everyone has shared their universe, continue to the next act! </p>" +
    "<a href=Memory.html><button>Next Act!</button></a></div>";
}

var noiseButton = document.getElementById("generateNoise");
noiseButton.addEventListener("click", Sound);
