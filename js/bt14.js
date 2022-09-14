var m = 10;
var s = 0;
function countdown1() {
    var x = document.getElementById("second");
    x.innerText = s;
    s--;
    var y = document.getElementById("minute");
    y.innerText = m;

    if(s<0){
        s=59
        m--
    }
    if(m<0){
        clearInterval(as);
    }
}
function countdown2() {
    var as = setInterval(countdown1, 1000);
}


