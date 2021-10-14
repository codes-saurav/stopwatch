
let hrs = 0;
let min = 0;
let sec = 0;


let timer = false
function start() {
    timer = true
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false
    hrs = 0
    min = 0
    sec = 0

    document.querySelector('.secs').innerHTML = '00'
    document.querySelector('.mins').innerHTML = '00'
    document.querySelector('.hours').innerHTML = '00'
}
function stopwatch() {
    if (timer == true) {
        sec += 1
        if (sec == 60) {
            min += 1
            sec = 0
        }
        if (min == 60) {
            hrs += 1
            min = 0
        }

        let hrstring = hrs;
        let minstring = min;
        let secstring = sec;

        if (hrs < 10) {
            hrstring = '0' + hrstring
        }
        if (min < 10) {
            minstring = '0' + minstring
        }
        if (sec < 10) {
            secstring = '0' + secstring
        }

        document.querySelector('.secs').innerHTML = secstring
        document.querySelector('.mins').innerHTML = minstring
        document.querySelector('.hours').innerHTML = hrstring
        setTimeout("stopwatch()", 1000) // kitni der delay krna hai
    }
}