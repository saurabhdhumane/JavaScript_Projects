let Result = document.getElementById("result");

      function InsertValue(value) {
        console.log(value)
        Result.value += value;
      }

function ClearResult(){
    Result.value = '';
}

function DeleteResult(){
    Result.value = Result.value.slice(0,-1)
}

function calculate(){
    try{
        Result.value = eval(Result.value);
    }catch{
        Result.value = "Error";
    }
    
}