let valorTotal = 0;
let restante = 50;


document.getElementById('zero').addEventListener('mouseover', () => {
    document.getElementById('zero').style.backgroundColor = "rgba(0, 102, 255, 0.404)"
})
document.getElementById('zero').addEventListener('mouseout', () => {
    document.getElementById('zero').style.backgroundColor = "#868686"
})

function altImg() {
    if (valorTotal >= 0 && valorTotal < 12.5) {
        document.getElementById('t1').style.visibility = "visible"
        document.getElementById('t2').style.visibility = "hidden"
        document.getElementById('t3').style.visibility = "hidden"
        document.getElementById('t4').style.visibility = "hidden"
    } else if (valorTotal > 12.5 && valorTotal < 25) {
        document.getElementById('t2').style.visibility = "visible"
        document.getElementById('t1').style.visibility = "hidden"
        document.getElementById('t3').style.visibility = "hidden"
        document.getElementById('t4').style.visibility = "hidden"
    } else if (valorTotal >= 25 && valorTotal < 37.5) {
        document.getElementById('t3').style.visibility = "visible"
        document.getElementById('t1').style.visibility = "hidden"
        document.getElementById('t2').style.visibility = "hidden"
        document.getElementById('t4').style.visibility = "hidden"
    } else if (valorTotal >= 37.5) {
        document.getElementById('t4').style.visibility = "visible"
        document.getElementById('t1').style.visibility = "hidden"
        document.getElementById('t2').style.visibility = "hidden"
        document.getElementById('t3').style.visibility = "hidden"
    }
}

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
    altImg()
}
function zerar() {
    valorTotal = 0
    restante = 50
    altImg()
    document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
    document.getElementById('add1').removeAttribute('style')
    document.getElementById('add2').removeAttribute('style')
    document.getElementById('add3').removeAttribute('style')
    document.getElementById('add4').removeAttribute('style')
    document.getElementById('add5').removeAttribute('style')

}

function sacar() {
    let valorSaque = Number(document.getElementById('inputSacar').value);
    if (valorSaque <= valorTotal && valorSaque > 0) {
        restante = valorSaque + restante
        valorTotal -= valorSaque
        altImg()
        console.log(restante)
        document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
        if (restante >= 1) {
            document.getElementById('add4').removeAttribute('style')
        } if (restante >= 0.50) {
            document.getElementById('add3').removeAttribute('style')
        } if (restante >= 0.25) {
            document.getElementById('add2').removeAttribute('style')
        } if (restante >= 0.10) {
            document.getElementById('add1').removeAttribute('style')
        } if (restante >= 0.048) {
            document.getElementById('add5').removeAttribute('style')
        }
        if (valorTotal > 0) {
            document.getElementById('zero').style.backgroundColor = "#868686"
            document.getElementById('zero').style.pointerEvents = "all"
        }
    } else {
        alert("Valor deve ser númerico, inteiro, maior que zero e menor ou igual a 50")
    }

}



