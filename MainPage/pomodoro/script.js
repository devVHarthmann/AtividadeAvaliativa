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
    if(bgEstiloAtual == 'rgb(20, 20, 20)'){
        land.style.backgroundColor = 'white'
        hd.style.backgroundColor = 'rgb(199, 199, 199)'
        t1.style.color = 'black'
    } else{
        land.style.backgroundColor = 'rgb(20, 20, 20)'
        hd.style.backgroundColor = ''
        t1.style.color = 'white'

    }
})