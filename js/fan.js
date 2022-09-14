var f = 50;
function rotate1(){
    var x = document.getElementById("fan");
    x.style.transform= 'rotate('+f+'deg)';
    f+=1;
    x.style.textAlign = 'center';
    x.style.marginTop = '100px';
}
var a1
function fan1(){
    a1= setInterval(rotate1, 50);
    clearInterval(a2);
    clearInterval(a3);
}
function rotate2(){
    var y = document.getElementById("fan");
    y.style.transform= 'rotate('+f+'deg)';
    f+=1;
    x.style.textAlign = 'center';
    x.style.marginTop = '100px';
}
var a2
function fan2(){
    a2=setInterval(rotate2, 25);
    clearInterval(a1);
    clearInterval(a3);
}
function rotate3(){
    var z = document.getElementById("fan");
    z.style.transform= 'rotate('+f+'deg)';
    f+=1;
    x.style.textAlign = 'center';
    x.style.marginTop = '100px';
}
var a3
function fan3(){
    a3=setInterval(rotate3, 5);
    clearInterval(a1);
    clearInterval(a2);
}
function off(){
    clearInterval(a1);
    clearInterval(a2);
    clearInterval(a3);
}