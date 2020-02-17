var endTime = new Date().getTime();
var endDate = new Date(endTime);
var hour = endDate.getHours();
var min = endDate.getMinutes();
var sec = endDate.getSeconds();
document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';

var counter;

function setTimer()
{
    endTime = new Date().getTime()+1500000;
    endDate = new Date(endTime);
    hour = endDate.getHours();
    min = endDate.getMinutes();
    sec = endDate.getSeconds();
    document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';
    counter = setInterval(() => {

        var nowTime = new Date();
        var distance = endTime - nowTime;

        var restMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var restSec = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('time').innerHTML = restMin.toString()+'m '+restSec.toString()+'s';
        console.log(nowTime);

        if(distance < 0)
        {
            clearInterval(counter);
            alert('Time ended! Go get some coffee, dude!')
        }
    },1000)
}

function resetTimer()
{
    clearInterval(counter);
    var endTime = new Date().getTime();
    var endDate = new Date(endTime);
    var hour = endDate.getHours();
    var min = endDate.getMinutes();
    var sec = endDate.getSeconds();
    document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';
    document.getElementById('time').innerHTML = '25m 00s';
}