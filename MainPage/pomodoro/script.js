const btnDl = document.getElementById('toggleBtn')
const land = document.getElementById('lp1')
const hd = document.getElementById('hd1')
const t1 = document.getElementById('t1')
const tB = document.getElementById('toggleBtn')

btnDl.addEventListener('click', () => {
    let bgEstiloAtual = window.getComputedStyle(land).backgroundColor
    btnDl.classList.toggle('active');
    tB.style.pointerEvents = 'none'
    setTimeout(() => {
        tB.style.pointerEvents = 'all';
    }, 440);
    if (bgEstiloAtual == 'rgb(20, 20, 20)') {
        land.style.backgroundColor = 'white'
        hd.style.backgroundColor = 'rgb(219, 217, 216)'
        t1.style.color = 'black'
        document.body.style.backgroundColor = 'white'
    } else {
        land.style.backgroundColor = 'rgb(20, 20, 20)'
        hd.style.backgroundColor = ''
        t1.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(20, 20, 20)'

    }
})

document.getElementById('start').addEventListener('click', () => {
    let duracao = 25 * 60;
    display = document.getElementById('ctRlg')
    document.getElementById('start').style.pointerEvents = 'none'
    cronometro(duracao, display)
})

const cronometro = (duracao, display) => {
    let cronometro = duracao;
    let minutos, segundos;

    let intervalo = setInterval(() => {
        minutos = Math.floor(cronometro / 60);
        segundos = Math.floor(cronometro % 60);

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        display.innerHTML = `${minutos}:${segundos}`
        cronometro -= 1;

        if (cronometro < 0) {
            clearInterval(intervalo)
            document.getElementById('start').style.pointerEvents = 'all'
        }
    }, 1000);
}