// Função responsável por apagar, acender a lâmpada e computar os clicks
let clicks = 0;
function turn() {
    
    if (document.getElementById('on').style.visibility == "visible") {
        document.getElementById('on').style.visibility = "hidden"
        document.getElementById('overlay').style.backgroundColor = "rgba(0, 0, 0, 0.808)"
        document.getElementById('contador').style.backgroundColor = "rgba(0, 0, 0, 0.808)"
    } else {
        document.getElementById('overlay').style.backgroundColor = "transparent"
        document.getElementById('contador').style.backgroundColor = "transparent"
        document.getElementById('on').style.visibility = "visible"
        clicks = clicks + 1
        document.getElementById('nClick').innerHTML = clicks
    } 

}

// EventListener para tocar o som e movimentar a placa de pressão

document.getElementById('pressure').addEventListener("click", () => {
    const sound = new Audio('sound/tok.mp3')
    document.getElementById('pressure').style.marginTop = "10px"
    setTimeout(() => {
        document.getElementById('pressure').style.marginTop = '0px';
        sound.play()
    }, 500);
    sound.play()
})
