const hours=document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const amorpm = document.querySelector('.amorpm');
const title = document.querySelector('.title')
const mybody = document.body;

function init(){
    const date = new Date();

    let hoursTime = date.getHours();
    let minutesTime = date.getMinutes();
    let secondsTime = date.getSeconds();
   

    if(amorpm.textContent == "PM"){
        title.textContent = "Good Night"
        mybody.style.backgroundImage = "url('night.jpeg')"
        mybody.style.backgroundRepeat= "no-repeat"
        mybody.style.backgroundSize= "cover" 
        hours.style.boxshadow="none"
        minutes.style.boxshadow="none"
        seconds.style.boxshadow="none"
    }
    
    else{
        title.textContent = "Good Morning"
        mybody.style.backgroundImage = "url('morning.avif')"
        mybody.style.backgroundRepeat= "no-repeat"
        mybody.style.backgroundSize= "cover"
        mybody.style.color="black"
    }

    if(hoursTime > 12) {
        hoursTime -= 12;
        amorpm.textContent = "PM";
    }else{
        amorpm.textContent = "AM";
    }

    if(hoursTime < 10){
        hoursTime = "0" + hoursTime;
    }
    if(minutesTime < 10){
        minutesTime = "0" + minutesTime;
    }
    if(secondsTime < 10){
        secondsTime = "0" + secondsTime;
    }
   
    hours.textContent = hoursTime;
    minutes.textContent = minutesTime;
    seconds.textContent = secondsTime;
   
    requestAnimationFrame(init);
}

requestAnimationFrame(init);

 