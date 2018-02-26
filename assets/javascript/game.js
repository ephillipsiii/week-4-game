// inital run function
$( document ).ready(function(){
    var wins = 0;
    var losses = 0;
    
    var score = 0;
    var button1, button2, button3, button4;
    var currentGuess = 0;
    
    //set initial numbers
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $(".targetScore").append(randomNumber);
    //don't think I need the lines below, but I'm trying to use them as a reference for updating wins/losses
    // $("#wins").append(wins);
    // $("#losses").append(losses);
    // $("#score").append(currentGuess);
    //buttons 
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
    console.log(button1, button2, button3, button4);

    // detects clicks on the buttons, adds the numbers and edits to the screen
    $("#button1").click(function(){
        currentGuess = currentGuess + button1;
        $(".currentGuess").html(currentGuess);
        evalCurrentGuess();
    });
    $("#button2").click(function(){
        currentGuess = currentGuess + button2;
        $(".currentGuess").html(currentGuess);
        evalCurrentGuess();
    });
    $("#button3").click(function(){
        currentGuess = currentGuess + button3;
        console.log(currentGuess);
        $(".currentGuess").html(currentGuess);
        console.log(wins);
        evalCurrentGuess();
    });
    $("#button4").click(function(){
        currentGuess = currentGuess + button4;
        console.log(currentGuess);
        $(".currentGuess").html(currentGuess);
        evalCurrentGuess();
    
    }); 
    //determine wins and losses, update screen accordingly
    function evalCurrentGuess(){
        if (currentGuess === randomNumber){
            wins++;
            $(".wins").html(wins);
            $(".currentGuess").html("");
            alert("You Win!");
            currentGuess = 0;
            randomNumber = Math.floor(Math.random() * 101) + 19;
            $(".targetScore").html(randomNumber);
        } else if (currentGuess > randomNumber) {
            losses++;
            $(".losses").html(losses);
            $(".currentGuess").html("");
            alert("You Lose!");
            currentGuess = 0;
            randomNumber = Math.floor(Math.random() * 101) + 19;
            $(".targetScore").html(randomNumber);
        }
    }
}); 
        


    

    
    

    






