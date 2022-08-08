const hourE = document.getElementById("hours");
const minuteE = document.getElementById("minutes");
const secondE = document.getElementById("seconds");
const ampmE = document.getElementById("ampms");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h >= 12){
        ampmE.innerHTML = 'PM';
    }else{
        ampmE.innerHTML = 'AM';
    }
    if(h > 12){
        h = h - 12;
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourE.innerText = h;
    minuteE.innerText = m;
    secondE.innerText = s;
    
    setTimeout(() =>{
        updateClock();
    }, 1000)
}
updateClock();