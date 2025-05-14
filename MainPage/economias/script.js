let valorTotal = 0;
let restante = 50;
let quantMoedas = [0, 0, 0, 0, 0]

document.getElementById('zero').addEventListener('mouseover', () => {
    document.getElementById('zero').style.backgroundColor = "rgba(0, 102, 255, 0.404)"
})
document.getElementById('zero').addEventListener('mouseout', () => {
    document.getElementById('zero').style.backgroundColor = "#868686"
})

function contaMoedas(valor) {
    
    if (valor == 0.05) {
        quantMoedas[0] += 1
    } if (valor == 0.10) {
        quantMoedas[1] += 1
    } if (valor == 0.25) {
        quantMoedas[2] += 1
    } if (valor == 0.50) {
        quantMoedas[3] += 1
    } if(valor == 1.00){
        quantMoedas[4] +=1
    }
    attMoedas()
}
function attMoedas(){
    document.getElementById('m1').innerHTML = quantMoedas[0]
    document.getElementById('m2').innerHTML = quantMoedas[1]
    document.getElementById('m3').innerHTML = quantMoedas[2]
    document.getElementById('m4').innerHTML = quantMoedas[3]
    document.getElementById('m5').innerHTML = quantMoedas[4]
}


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
        contaMoedas(valor)
        attMoedas()
    } else {
        valorTotal += valor;
        document.getElementById('show').innerHTML = `R$ ${valorTotal.toFixed(2)}`
        restante -= valor;
        contaMoedas(valor)
        attMoedas()
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
    quantMoedas[0] = 0
    quantMoedas[1] = 0
    quantMoedas[2] = 0
    quantMoedas[3] = 0
    quantMoedas[4] = 0
    attMoedas()
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



