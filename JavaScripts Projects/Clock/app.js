const EndDate = "8 june 2023 05:59 PM";
document.getElementById('End-Date').innerHTML=EndDate;
const inputs = document.querySelectorAll('input');

function clock(){
    const end = new Date(EndDate)
    const now = new Date()
    // console.log(End)
    // console.log(Now)
    const diff = (end-now) / 1000;

    if(diff<0){
        return;
    }
    inputs[0].value = (Math.floor(diff/3600/24)); // calculate day's
    inputs[1].value =(Math.floor(diff/3600)%24); // calculate hr
    inputs[2].value =(Math.floor(diff/60)%60); // calculate min
    inputs[3].value =(Math.floor(diff)%60); // calculate min
} 

/*
    1 day = 24 hr
    1 hr = 60 min
    60 min = 3600 sec
*/ 

clock()

setInterval(
    () =>{
        clock()
    },1000
)

