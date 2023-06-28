var rotationAngle = 0; // Variável para armazenar a posição de rotação atual

function onChange(iconID) {
  var playButton = document.getElementById(iconID);

  if (playButton.className === "fas fa-play-circle botao-play") {
    playButton.className = "fas fa-pause-circle";
    var classAtual = document.getElementById(iconID).className.toString();

    console.log(classAtual)
    playButton.style.fontSize = "50px";
    document.getElementById("img").classList.add("rotating");
  } else {
    playButton.className = "fas fa-play-circle botao-play";
    document.getElementById("img").classList.remove("rotating");
    var classAtual = document.getElementById(iconID).className.toString();
    console.log(classAtual)

    // Armazena a posição atual de rotação em graus
    var imgStyle = window.getComputedStyle(document.getElementById("img"));
    var transformValue = imgStyle.getPropertyValue("transform");
    var values = transformValue.split("(")[1].split(")")[0].split(",");
    var a = values[0];
    var b = values[1];
    rotationAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
}

function onChangeArrow(iconID) {
  document.getElementById(iconID).classList.add("changeArrowForward");
}

