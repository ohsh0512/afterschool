const clock = document.querySelector(".clock");

function getclock(){
    const date = new Date();
    const Hours = string(date.getHours()).padstart(2,"0")
    const minutes = string(date.getMinutes()).padstart(2,"0")
    const second = string(date.getSeconds()).padstart(2,"0")
    clock.innerText = Hours +":" + Minutes +":"+ Second;
    console.log
}
getclock();
setInterval(getclock, 1000)


