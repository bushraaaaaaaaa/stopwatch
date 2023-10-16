
var hour=+prompt("enter hour");
var min=+prompt("enter minute");
var sec=+prompt("enter second");
var msec=0;
var interval;
var hourhtml=document.getElementById("hour");
var minhtml=document.getElementById("min");
var sechtml=document.getElementById("sec");
var msechtml=document.getElementById("msec");
function stopwatch(){
    msec++;
    msechtml.innerHTML=msec;

    if(msec>=100){
        sec--;
        sechtml.innerHTML=sec;
msec=0;
}
else if(sec<=0){
    min--;
    minhtml.innerHTML=min;
    sec=59;
    if(min==-1){
        min=0;
        minhtml.innerHTML=min;
    }
}
 else if(min<=0){
    hour--;
    hourhtml.innerHTML=hour;
    min=59;
}



}
function start(){
interval=setInterval(stopwatch,10);
}
function pause(){
clearInterval(interval);
}
