function gamma() {
  var gammaStart = document.getElementById("gammaStart");
  var gamma = localStorage.getItem("gamma");
  gammaStart.innerHTML = "<b>" + gamma + "</b>";
}

window.onload = gamma();

function Memory() {
  var memoryDiv = document.getElementById("memoryStory");
  var name = localStorage.getItem("agentName");
  var gamma = localStorage.getItem("gamma");
  var feeling1 = document.getElementById("feeling1").value;
  var feeling2 = document.getElementById("feeling2").value;
  var feeling3 = document.getElementById("feeling3").value;
  var contraptionM1 = document.getElementById("contraptionM1").value;
  var contraptionM2 = document.getElementById("contraptionM2").value;
  var contraptionM3 = document.getElementById("contraptionM3").value;
  memoryDiv.innerHTML =
    "<h3> Memory Mash! </h3> <div> <p> Agent <b>" +
    name +
    "</b> paced back and forth. They felt <b>" +
    feeling3 +
    "</b> that they had played directly into Crucius’ hands, but they were not beaten yet. While they hadn’t seen anything like Crucius’s <b>" +
    contraptionM2 +
    "</b> before, they weren't out of options. While Crucius ranted about their victory, Agent <b>" +
    name +
    "</b> felt <b>" +
    feeling1 +
    "</b>. They reached into their pocket and produced a <b>" +
    contraptionM3 +
    "</b>. It wasn’t much, but it could buy them a split second to break away. 'Sorry to leave early,' they said, sprinting away. Crucius followed, 'You won’t escape that easily,' they snarled, quickly cornering Agent <b>" +
    name +
    "</b> once again. They felt <b>" +
    feeling2 +
    "</b>. They had one last ace up their sleeve, a <b>" +
    contraptionM1 +
    "</b>. Handling it carefully, they drew energy from across the dimensions and with a terrible popping sound, Crucius disappeared, locked away in a simple <b>" +
    gamma +
    "</b>, safely in another world. </div> <div> <a href=Closing.html><button> The EPIC Conclusion </button></div>";
}

var memoryButton = document.getElementById("generateMemory");
memoryButton.addEventListener("click", Memory);
