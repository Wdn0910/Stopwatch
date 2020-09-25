window.onload = function () {

    var minutos = 00;
    var segundos = 00;
    var milisegundos = 00;

    var appendminutos = document.getElementById("minutos")
    var appendsegundos = document.getElementById("segundos")
    var appendmilisegundos = document.getElementById("milisegundos")
    var buttonStart = document.getElementById("buttonStart")
    var buttonStop = document.getElementById("buttonStop")
    var buttonReset = document.getElementById("buttonReset")

    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        minutos = "00";
        segundos = "00";
        milisegundos = "00";
        appendminutos.innerHTML = minutos;
        appendsegundos.innerHTML = segundos;
        appendmilisegundos.innerHTML = milisegundos;
    }

    function startTimer () {
        milisegundos++;

        if (milisegundos < 9){
            appendmilisegundos.innerHTML = "0" + milisegundos;
        }

        if (milisegundos > 9){
            appendmilisegundos.innerHTML = milisegundos;
        }

        if (milisegundos > 99){
            console.log("segundos")
            segundos++;
            appendsegundos.innerHTML = "0" + segundos;
            milisegundos = 0;
            appendmilisegundos.innerHTML = "0" + 0;
        }

        if (segundos > 9){
            appendsegundos.innerHTML = segundos;
        }

        if (segundos > 59){
            console.log("minutos")
            minutos++;
            appendminutos.innerHTML = "0" + minutos;
            segundos = 0;
            appendsegundos.innerHTML = "0" + 0;
            milisegundos = 0;
            appendmilisegundos.innerHTML = "0" + 0;
        }

        if (minutos > 9){
            appendminutos.innerHTML = minutos;
        }

    }
}