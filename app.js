var neno = 00;
var seconds = 00;

var appendNeno = document.getElementById('neno');
var appendSeconds = document.getElementById('seconds');
var startBtn = document.getElementById('btnStart');
var stopBtn = document.getElementById('btnStop');
var resetBtn = document.getElementById('btnReset');
var interval;
function startTime() {
    neno++;
    if (neno <= 9) {
        appendNeno.innerHTML = "0" + neno;
    } else if (neno > 9 && neno < 98) {
        appendNeno.innerHTML = neno;
    } else {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        neno = 0;
        appendneno.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
    if(appendSeconds<=02){
        docuent.write(window.location.assign("http://www.me.com/1.html"));
        
    }
}

startBtn.onclick = function () {
    interval = setInterval(startTime, 10);
}

stopBtn.onclick = function () {
    clearInterval(interval);
}

resetBtn.onclick = function () {
    clearInterval(interval);
    appendNeno.innerHTML = "0" + 0;
    appendSeconds.innerHTML = "0" + 0;
}

btnLaps.onclick=function (){
    document.write(seconds+":"+neno);
}

