let valorTotal = 0;
let restante = 50;
function addValue(valor) {
    if ((50 - valorTotal) == valor) {
        valorTotal += valor;
        document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
        alert("Bolsa cheia")
        restante -= valor;

    } else {
        valorTotal += valor;
        document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
        restante -= valor;

    }

    if (restante < 1) {
        document.getElementById('add4').style.backgroundColor = "rgb(43, 43, 43)"
        document.getElementById('add4').style.pointerEvents = "none"
    } if (restante < 0.50) {
        document.getElementById('add3').style.backgroundColor = "rgb(43, 43, 43)"
        document.getElementById('add3').style.pointerEvents = "none"
    } if (restante < 0.25) {
        document.getElementById('add2').style.backgroundColor = "rgb(43, 43, 43)"
        document.getElementById('add2').style.pointerEvents = "none"
    } if (restante < 0.10) {
        document.getElementById('add1').style.backgroundColor = "rgb(43, 43, 43)"
        document.getElementById('add1').style.pointerEvents = "none"
    } if (restante < 0.048) {
        document.getElementById('add5').style.backgroundColor = "rgb(43, 43, 43)"
        document.getElementById('add5').style.pointerEvents = "none"
    }
    if (valorTotal > 0) {
        document.getElementById('zero').style.backgroundColor = "#868686"
        document.getElementById('zero').style.pointerEvents = "all"
    }
}
function zerar() {
    valorTotal = 0
    restante = 50
    document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
    document.getElementById('zero').style.backgroundColor = "rgb(43, 43, 43)"
    document.getElementById('zero').style.pointerEvents = "none"
    document.getElementById('add1').style.backgroundColor = "#868686"
    document.getElementById('add1').style.pointerEvents = "all"
    document.getElementById('add2').style.backgroundColor = "#868686"
    document.getElementById('add2').style.pointerEvents = "all"
    document.getElementById('add3').style.backgroundColor = "#868686"
    document.getElementById('add3').style.pointerEvents = "all"
    document.getElementById('add4').style.backgroundColor = "#868686"
    document.getElementById('add4').style.pointerEvents = "all"
    document.getElementById('add5').style.backgroundColor = "#868686"
    document.getElementById('add5').style.pointerEvents = "all"
}



