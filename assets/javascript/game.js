// alert("connected to html")

$(document).ready(function(){


let bananaNum = 0;
let appleNum = 0;
let pinNum = 0;
let watermNum = 0;
let Score = 0
const wins = 0;
const losses = 0;
let randomNum = 0; 
var randomGem = function(){

     pinNum = Math.floor((Math.random()* 12) + 1);
     console.log( "pinNum=" + pinNum);
    appleNum = Math.floor((Math.random()* 12) + 1);
 watermNum= Math.floor((Math.random()* 12) + 1);
     bananaNum = Math.floor((Math.random()* 12) + 1);
    randomNum= Math.floor((Math.random()* 100) + 19);
    $("#randomNum").html( "Target Number: " + randomNum);
  
}

randomGem();
//pin
    $("#pin").on("click", function(){
        Score = Score + pinNum;
        $("#playerScore").html("Player Score: " +Score);
        // compare();
        if(Score > randomNum){
            alert("Sorry, you lost.");
            losses = losses + 1;
            $("#losses").html(losses);
            // $("#message").html("YOU LOST");
            randomGem();
            Score = 0;
            $("#playerScore").text(Score);
            
        }
        if (Score === randomNum){
            wins++;
            $("#wins").text( wins);
            // $("#message").text("YOU WIN");
            randomGem();
            Score = 0
            $("#playerScore").html("" + Score);
            
           
        }	
    });

        //waterm 

        $("#waterm").on("click", function(){
            Score = Score + watermNum;
            $("#playerScore").html("Player Score: " +Score);
            // compare();
            if(Score > randomNum){
                alert("Sorry, you lost.");
                losses = losses + 1;
                $("#losses").html(losses);
                // $("#message").html("YOU LOST");
                randomGem();
                Score = 0;
                $("#playerScore").text(Score);
                
            }
            if (Score === randomNum){
                wins++;
                $("#wins").text( wins);
                // $("#message").text("YOU WIN");
                randomGem();
                Score = 0
                $("#playerScore").html("" + Score);
                
               
            }	
        });

            //apple

            $("#apple").on("click", function(){
                Score = Score + appleNum;
                $("#playerScore").html("Player Score: " +Score);
                // compare();
                if(Score > randomNum){
                    alert("Sorry, you lost.");
                    losses = losses + 1;
                    $("#losses").html(losses);
                    // $("#message").html("YOU LOST");
                    randomGem();
                    Score = 0;
                    $("#playerScore").text(Score);
                    
                }
                if (Score === randomNum){
                    wins++;
                    $("#wins").text( wins);
                    // $("#message").text("YOU WIN");
                    randomGem();
                    Score = 0
                    $("#playerScore").html("" + Score);
                    
                   
                }	
            });

                //banana

                $("#banana").on("click", function(){
                    Score = Score + bananaNum;
                    $("#playerScore").html("Player Score: " +Score);
                    // compare();
                    if(Score > randomNum){
                        alert("Sorry, you lost.");
                        losses = losses + 1;
                        $("#losses").html(losses);
                        // $("#message").html("YOU LOST");
                        randomGem();
                        Score = 0;
                        $("#playerScore").text(Score);
                        
                    }
                    if (Score === randomNum){
                        wins++;
                        $("#wins").text( wins);
                        // $("#message").text("YOU WIN");
                        randomGem();
                        Score = 0
                        $("#playerScore").html("" + Score);
                        
                       
                    }	
                });

                $("#reset").on("click", function() {
                    wins = 0;
                    losses = 0;
                   Score = 0;
                    $("#wins").html("Wins: " + 0);
                    $("#losses").html("Losses: " + 0);
                    $("#playerScore").html(Score);
                    
                    randomGem();
                });
        
    });

