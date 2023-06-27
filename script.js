function onChange(iconID){
    if(document.getElementById(iconID).className=="fas fa-play-circle botao-play"){
      document.getElementById(iconID).className = "fas fa-pause-circle";
      document.getElementById(iconID).style.fontSize = 50
    }else{
      document.getElementById(iconID).className = "fas fa-play-circle botao-play";
    }
  }

  function onChangeArrow(iconID) {
    document.getElementById(iconID).classList.add('changeArrowForward');
  }