var endTime = new Date().getTime();
var endDate = new Date(endTime);

var hour = endDate.getHours();
var min = endDate.getMinutes();
var sec = endDate.getSeconds();

document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';

var counter;
var isRunning = false;
var remainTime = 1500000;
var distance = remainTime;

function setTimer()
{
    endTime = new Date().getTime() + remainTime;
    endDate = new Date(endTime);

    hour = endDate.getHours();
    min = endDate.getMinutes();
    sec = endDate.getSeconds();

    document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';
    
    if(isRunning == false)
    {
        endTime = new Date().getTime() + remainTime;
        isRunning = true;
        document.getElementById('start').innerText = 'Pause timer';
    }
    else
    {
        clearInterval(counter);
        isRunning = false;
        remainTime = distance;
        document.getElementById('start').innerText = 'Start timer';
    }

    if(isRunning)
    {
        counter = setInterval(() => {
            var nowTime = new Date();
            distance = endTime - nowTime;
            console.log(distance);
            var restMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var restSec = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('time').innerHTML = restMin.toString()+'m '+restSec.toString()+'s';

            if(distance < 0)
            {
                clearInterval(counter);
                alert('Time ended! Go get some coffee, dude!')
            }
        },1000);
    }
}

function resetTimer()
{
    clearInterval(counter);
    isRunning = false;

    var endTime = new Date().getTime();
    var endDate = new Date(endTime);

    var hour = endDate.getHours();
    var min = endDate.getMinutes();
    var sec = endDate.getSeconds();

    document.getElementById('endTime').innerHTML = hour.toString()+'h '+min.toString()+'m '+sec.toString()+'s';
    document.getElementById('time').innerHTML = '25m 00s';
}