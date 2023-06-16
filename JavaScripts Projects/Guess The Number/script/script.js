var UserName;
var count = 0;
var Convert;
function ClickButton() {
    var check = confirm("Are You want To Play the game");
    if (check == true) {
         UserName = prompt("Please Enter Your Name:");
        if (UserName == null) {
            document.getElementById('Result').innerHTML = "Sorry You Quit the game"
        } else {
            document.getElementById('UserName').innerHTML = "welcome " + UserName + " please click here to start"
            document.getElementById('Result').innerHTML = '<button id="Game-start" onclick="StartGame()">Start</button>';

            document.getElementById('Disable').innerHTML = "";
        }
    }
}

function StartGame() {
    document.getElementById('Game-start').style.display = "none";
    var RandomNumber = Math.random();
    RandomNumber *= 100;
    Convert = parseInt(RandomNumber);
    console.log(Convert);


    var UserInput;
    var CheckNumber;
    do {
        UserInput = prompt("Enter Your Number You Guess");
        CheckNumber = parseInt(UserInput);

        if (isNaN(CheckNumber)) {
            alert("Please enter a valid number.");
        } else if (CheckNumber === Convert) {
            alert("Congratulations! You guessed the correct number.");
            document.getElementById('Result').style.textAlign = "center";
            document.getElementById('Result').style.color = "#07ff07";
            document.getElementById('Result').style.fontSize = "25px";
            document.getElementById('Container').style.height = "50vh";
            document.getElementById('UserName').style.display = "none";
            document.getElementById('Result').innerHTML = "Congress " +  UserName + " You Guess The Correct Number " + Convert + '<br/> <br/> <br/> <button id="Game-start" onclick="StartGame()">Restart The Game</button>';
            document.getElementById('Game-start').style.position = "none";
            document.getElementById('Game-start').style.marginTop = "0";
            document.getElementById('Game-start').style.marginLeft = "0";
            document.getElementById('Game-start').style.transform = "none";


        }
        else {
            alert("Wrong number. Try again.");
            count++;
        }

        if (CheckNumber < Convert) {
            alert("The Number is Enter Is Less Than Orignal Number")
        } else if (CheckNumber > Convert) {
            alert("The Number is Enter Is Greater Than Orignal Number")

        } else {

        }


        if(count ==1){
            alert("Warning!! You Have Only 2 Life-Line Left")
        }else if(count==2){
            alert("Warning!! You Have Only 1 Life-Line Left")
        }else if (count ==3){
            alert("Warning!! You Loss Your All 3 Life-Lines You Loss the Game")
            document.getElementById('Result').style.textAlign = "center";
            document.getElementById('Result').style.color = "Red";
            document.getElementById('Result').style.fontSize = "25px";
            document.getElementById('Container').style.height = "50vh";
            document.getElementById('UserName').style.display = "none";
            document.getElementById('Result').innerHTML = "Sorry " +  UserName + " You Loss The Game <br/> the correct number is " + Convert + '<br/> <br/> <br/> <button id="Game-start" onclick="StartGame()">Restart The Game</button>';
            document.getElementById('Game-start').style.position = "none";
            document.getElementById('Game-start').style.marginTop = "0";
            document.getElementById('Game-start').style.marginLeft = "0";
            document.getElementById('Game-start').style.transform = "none";


            break;
        }
    } while (isNaN(CheckNumber) || CheckNumber !== Convert);
}



function displayWarning() {
    alert("Right-clicking is not allowed on this page.");
    return false;
}


document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // Code to execute when the page is hidden
      alert("Action not allow");
      
    } else {
      // Code to execute when the page is visible
      console.log("Page visible");
    }
  });

  window.addEventListener("devtoolschange", function (event) {
    // Code to execute when the dev tools are opened or closed
    if (event.detail.isOpen) {
      console.log("Dev tools opened");
    } else {
      console.log("Dev tools closed");
    }
  });


// var count = 0;
// window.addEventListener("blur", function () {
//   // Code to execute when the page loses focus
//   count++;
//   alert("Warning!! This Action Is Not allow")
//   console.log("Page lost focus");

//   if(count==1){
//     alert(" You Have Only 2 Change if You Do This Again The Game Is Automaticaly End ")
//   }else if(count==2){
//     alert(" You Have Only 1 Change if You Do This Again The Game Is Automaticaly End ")
//   }else if(count==3){
//   alert(" You Have Only 0 Change if You Do This Again The Game Is Automaticaly End ")
//   document.getElementById('Result').innerHTML = "Sorry You Quit the game";
//   return false;
//   }
// });


