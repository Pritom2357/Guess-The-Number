
let mainNum = Math.floor((Math.random() * 1000) + 1);

var userVal;
var counter=1;



function check(userVal){
    let number = userVal.value;
    console.log(number);
    if(number == mainNum){
        alert("Congratulations! You have guessed the correct number! You did it on "+ counter+ " try(s)!");
    }
    else if(number > mainNum){
        document.getElementById("Result").value = "Too high";
        userVal.value = "";
        counter++;
    }
    else if(number < mainNum){
        document.getElementById("Result").value = "Too low";
        userVal.value = "";
        counter++;
    }
    
}

function checkBtn(){
    var giveBtn = document.getElementById("giveBtn");
    giveBtn.addEventListener("click", function(){
        alert("The correct number is: " + mainNum);
    })
    var btn = document.getElementById("checkBtn");
    userVal = document.getElementById("inputVal");
    btn.addEventListener("click", function(){
        check(userVal);
    });
}

checkBtn();

