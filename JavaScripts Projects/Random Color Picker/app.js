const getColor =() =>{
    //hexcode
    const randomnumber = Math.floor(Math.random()*16777215);
    console.log(randomnumber)
    const randomCode = "#"+randomnumber.toString(16);
    console.log(randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementById('ColorCode').innerHTML = randomCode;


    navigator.clipboard.writeText(randomCode)
}

// event call
document.getElementById('btn').addEventListener(
    "click",getColor
)



//init call
getColor();