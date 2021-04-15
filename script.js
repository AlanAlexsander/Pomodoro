var tempo = document.getElementById('clock')
var quadro = document.getElementById(`quadro`)
var pausa = document.getElementById(`start`)
var reset = document.getElementById(`reset`)
var min = 25
var sec1 = 0
var sec2 = 0
var start = 0
var running = false
var controleDeTempo;
var ajudaReset = 0
var somDoBotao = new Audio (`button.wav`);
var finish = new Audio (`potato.mp4`);
var resetB = new Audio (`reset.wav`);

function comecar() { // Inicia a contagem
    somDoBotao.play()
   if (running == false) {
    controleDeTempo = setInterval(contando,1000);
    pausa.innerText = `PAUSE`
    running = true
   } else {
    pausa.innerText = `START!`
    running = false
    stop()
   }
}

function stop() { //INTERROMPE a contagem
    clearInterval(controleDeTempo);
    return
}

function resetar() {
    resetB.play()
    stop()
    timer(1)
}

function contando() { //REALIZA a contagem
    if (sec2 > 0 && sec1 > 0) {
        sec2--
        tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
        running = true
    } else if (sec2 == 0 && sec1 > 0) {
        sec1--
        sec2 = 9
        tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
        running = true
    } else if (sec2 > 0 && sec1 == 0) {
        sec2--
        tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
        running = true
    } else if (min > 0 && sec2 == 0 && sec1 == 0) {
        min--
        sec1 = 5
        sec2 = 9
        tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
        running = true
    } else if (min == 0 && sec1 == 0 && sec2 == 0){
        finish.play()
        running = false
        if (ajudaReset == 1) {
            timer(2)
        } else {
            timer(1)
        }
        stop()
    }
}

function timer(value){ // Informa o tempo e qual cor usar
    if (running == true) {
        var aviso = window.confirm(`The timer is running. Are you sure you would like to change it?`)
        if (aviso == true) {
            running = false
            stop()
        }
    }
    if (running == false) {
        switch (value) {
            case 1:
                min = 25
                sec1 = 0
                sec2 = 0
                tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
                document.body.style.background = `#ffc0cb`
                document.body.style.transition = `background-color 0.8s `
                quadro.style.background = `#b9606f`
                pausa.innerText = `START!`
                ajudaReset = 1
                break;
            case 2:
                min = 5
                sec1 = 0
                sec2 = 0
                tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
                document.body.style.background = `#AFEEEE`
                document.body.style.transition = `background-color 0.8s `
                quadro.style.background = `#05B8CC`
                pausa.innerText = `START!`
                ajudaReset = 2
                break;
            case 3:
                min = 10
                sec1 = 0
                sec2 = 0
                tempo.innerHTML = `${min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${sec1}${sec2}`
                document.body.style.background = `#00CD66`
                document.body.style.transition = `background-color 0.8s `
                quadro.style.background = `#008B45`
                pausa.innerText = `START!`
                ajudaReset = 3
                break;
            default:
                alert (`Algo deu errado`);
        }
    }
}
