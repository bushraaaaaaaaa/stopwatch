var hour=0;
var min=0;
var sec=0;
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
        sec++;
        sechtml.innerHTML=sec;
msec=0;
}
else if(sec>=60){
    min++;
    minhtml.innerHTML=min;
    sec=0;
}
else if(min>=60){
    hour++;
    hourhtml.innerHTML=hour;
    min=0;
}

}
function start(){
interval=setInterval(stopwatch,10);
}
function pause(){
clearInterval(interval);
}
function reset(){
    var hour=0;
var min=0;
var sec=0;
var msec=0;
msechtml.innerHTML=msec;
minhtml.innerHTML=min;
hourhtml.innerHTML=hour;
sechtml.innerHTML=sec;
pause();
}