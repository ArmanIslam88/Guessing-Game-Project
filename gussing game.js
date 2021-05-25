var numberOfWin=0;
var numberOfLost=0;

    for (var i=1; i<=5; i++) {
        var guessNumber = parseInt(prompt("Enter Guess Number 1 to 5"));
        var randomNumber =Math.floor(Math.random()*5)+1;

    if (guessNumber==randomNumber) {
        console.log("You Have Won!!!")
        numberOfWin++;  
    }
     else {
        console.log("You Are Lost,the random number was "+ randomNumber)
        numberOfLost++;
    }   
}
alert("The Total Number of Won : "+ numberOfWin);
alert("The Total Number of Lost : "+ numberOfLost);