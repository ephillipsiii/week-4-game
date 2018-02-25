// inital run function
$( document ).ready(function(){
    var wins = 0;
    var losses = 0;
    var buttonNumber = [];
    var score = 0;
    var button1, button2, button3, button4;
    var currentGuess = 0;
    
    
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $(".targetScore").append(randomNumber);
    $("#wins").append(wins);
    $("#losses").append(losses);
    $("#score").append(currentGuess);
    //buttons 
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
    console.log(button1, button2, button3, button4);

    $("#button1").click(function(){
        $(".currentGuess").append(currentGuess + + button1);
    });
    $("#button2").click(function(){
        $(".currentGuess").append(currentGuess + + button2);
    });
    $("#button3").click(function(){
        $(".currentGuess").append(currentGuess + + button3);
    });
    $("#button4").click(function(){
        $(".currentGuess").append(currentGuess + + button4);
    });

}
);

    

    
    

    






