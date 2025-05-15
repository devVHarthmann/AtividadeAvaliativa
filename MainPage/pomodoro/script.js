const btnDl = document.getElementById('toggleBtn')
const land = document.getElementById('lp1')
const hd = document.getElementById('hd1')
const t1 = document.getElementById('t1')
const tB = document.getElementById('toggleBtn')
const rlg = document.getElementById('ctRlg')
const st = document.getElementById('start')
const ps = document.getElementById('pausa')
const rt = document.getElementById('reset')
let pausa = true

btnDl.addEventListener('click', () => {
    let bgEstiloAtual = window.getComputedStyle(land).backgroundColor
    btnDl.classList.toggle('active');
    tB.style.pointerEvents = 'none'
    setTimeout(() => {
        tB.style.pointerEvents = 'all';
    }, 440);
    if (bgEstiloAtual == 'rgb(20, 20, 20)') {
        land.style.backgroundColor = 'white'
        hd.style.backgroundColor = 'white'
        t1.style.color = 'rgb(19, 16, 16)'
        document.body.style.backgroundColor = 'white'
        rlg.style.color = 'rgb(19, 16, 16)'
        
        st.style.backgroundColor = 'rgb(19, 16, 16)'
        ps.style.backgroundColor = 'rgb(19, 16, 16)'
        rt.style.backgroundColor = 'rgb(19, 16, 16)'
        
    } else {
        land.style.backgroundColor = 'rgb(20, 20, 20)'
        hd.style.backgroundColor = ''
        t1.style.color = 'white'
        document.body.style.backgroundColor = 'rgb(20, 20, 20)'
        rlg.style.color = 'white'
        st.style.backgroundColor = 'rgb(147, 255, 46)'
        ps.style.backgroundColor = 'rgb(147, 255, 46)'
        rt.style.backgroundColor = 'rgb(147, 255, 46)'


    }
})

document.getElementById('start').addEventListener('click', () => {
    let duracao = 25 * 60;
    display = document.getElementById('ctRlg')
    document.getElementById('start').style.pointerEvents = 'none'
    pausa = false;
    cronometro(duracao, display)
})

const cronometro = (duracao, display) => {
    let cronometro = duracao;
    let minutos, segundos;

    let intervalo = setInterval(() => {
        if(!pausa){minutos = Math.floor(cronometro / 60);
        segundos = Math.floor(cronometro % 60);

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        display.innerHTML = `${minutos}:${segundos}`
        cronometro -= 1;

        if (cronometro < 0) {
            clearInterval(intervalo)
            document.getElementById('start').style.pointerEvents = 'all'
        }}
    }, 1000);
}

document.getElementById('pausa').addEventListener('click', () => {
    pausa = pausa == false ? true : false;
})

document.getElementById('reset').addEventListener('click', () => {
    window.location.reload()
})