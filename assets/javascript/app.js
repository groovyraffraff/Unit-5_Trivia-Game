$(document).ready(function(){

    // game begins on start, questions display and timer starts

        $(document).on('click', '#start', function(){
            game.start();
        })
        $(document).on('click', '#end', function(){
            game.done();
        })
        $(document).on('click', '#replay', function(){
            game.reset();
        })
    
    //trivia array 
    var questions = [
        {   triviaQuestion: "Which actor never voiced Darth Vader?",
            answerOptions: ["David Prowse", "Sebastian Shaw", "Hayden Christensen", "James Earl Jones"],
            correctAns: "David Prowse"
             },
    
        {   triviaQuestion: "What are the odds of successfully navigating an asteroid field?",
            answerOptions: ["9,734 to 1", "7,880 to 1", "3,720 to 1", "5,430 to 1"],
            correctAns: "3,720 to 1"
             },
    
        {   triviaQuestion: "What is Chewbacca's son's name?",
            answerOptions: ["Cantiroo", "Lumpawaroo", "Lombacca", "Chootacca"],
            correctAns: "Lumpawaroo"
             },
    
        {   triviaQuestion: "In What film does Bobba Fett first appear?",
             answerOptions: ["The Star Wars Holiday Special", "Star Wars", "The Empire Strikes Back", "Return of The Jedi"],
             correctAns: "The Star Wars Holiday Special"
              },
    
         {   triviaQuestion: "How fast did Captain Han Solo complete the Kessel Run?",
             answerOptions: ["11", "12", "13", "14"],
             correctAns: "12"
              },
    
         {   triviaQuestion: "Who is Lando Calrissian's second in command at the Cloud City mining opperation on Bespin?",
             answerOptions: ["L3-37", "Lobot", "Garindan", "Kubaz"],
             correctAns: "Lobot"
              },
    
        {   triviaQuestion: "In how many forms of communication is C-3P0 fluent?",
              answerOptions: ["5 million", "6 million", "7 million", "8 million"],
              correctAns: "6 million"
               },
    
        {   triviaQuestion: "What is the filming location for the Tatooine based Lars Homestead?",
              answerOptions: ["Death Valley, California", "The Gobi Desert", "Tunisia","Saudia Arabia"],
              correctAns: "Tunisia"
               }
          ];
        
        var timer= undefined; //made global to facilitate the replay & reset the timer
         
        //  game object with functions 
        var game = {
            correct: 0,
            incorrect: 0,
            unasnwered: 0,
            counter: 66,
            countdown: function(){
                game.counter--;
                $("#counter").html(game.counter);
                if (game.counter < 0){
                    alert("Time is up!");
                    game.done();
                        // cleartimer
                    }
                },
            start: function() {         
                timer = setInterval(game.countdown,1000);
                    $("#qWrapper").prepend('<div class="row" id="timer">Time Remaining: <span id="counter">66</span> seconds</div>');
                    $("#myInstructions").remove(); //remove instruction text
                    $("#start").remove(); //removes Start button after clicked
                        for (var i=0; i<questions.length; i++){
                            $("#qWrapper").append('<div class="triviaQuestion row">' + questions[i].triviaQuestion + '</div>')
                    
                         for (var j=0; j<questions[i].answerOptions.length; j++) {  
                            $("#qWrapper").append("<div class='row form-check'></<div><input class='form-check-input answerInput' type='radio' name='triviaQuestion-"+i+"' value='"+questions[i].answerOptions[j]+"'>"+
                            "<label class='form-check-label answerItems' for='triviaQuestion-"+i+"'> "+ questions[i].answerOptions[j] +" </label>")
                           }
                         }
                        
                   $("#qWrapper").append('<div class="mx-auto" style="width: 200px;" id="bWrapper"><br><button id="end" class="button2">Done</button></div>')    //adds Done button if user finishes answering before timer is up 
                },
            done: function(){
                clearInterval(timer);
                $.each($("input[name='triviaQuestion-0']:checked"),function(){
                    if($(this).val()==questions[0].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-1']:checked"),function(){
                    if($(this).val()==questions[1].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-2']:checked"),function(){
                    if($(this).val()==questions[2].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-3']:checked"),function(){
                    if($(this).val()==questions[3].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-4']:checked"),function(){
                    if($(this).val()==questions[4].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-5']:checked"),function(){
                    if($(this).val()==questions[5].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-6']:checked"),function(){
                    if($(this).val()==questions[6].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });


                $.each($("input[name='triviaQuestion-7']:checked"),function(){
                    if($(this).val()==questions[7].correctAns){
                        game.correct++;
                    }
                    else {
                        game.incorrect++;
                    }
                });

                
                this.result();
                },
            result: function(){
                 $("#qWrapper h2").remove();
                 $("#qWrapper").html('<div id="allDone">All done!</div>');
                 $("#qWrapper").append('<div id="correctA">Correct Answers:  ' +this.correct+'</div>');
                 $("#qWrapper").append('<div id="incorrectA">Incorrect Answers:  ' +this.incorrect+'</div>');
                 $("#qWrapper").append('<div id="unanswered">Unanswered Questions:  ' +(questions.length-(this.incorrect+this.correct))+'</div>');
                 $("#qWrapper").append('<div class="mx-auto" style="width: 200px;" id="bWrapper"><br><button id="replay" class="button2">Replay</button></div>')
                 game.counter=66;
                 timer=undefined;
                },


            reset: function(){
                game.correct=0;
                game.incorrect=0; 
                game.unanswered=0;
                $("#insText").append('<p class="lead" id="myInstructions">You have 66 seconds to see how many questions you can answer correctly.</p>'); 
                $("#qWrapper").empty();
                $("#qWrapper").append('<div class="mx-auto" id="bWrapper"><button id="start" class="button2"><img src="https://i.imgur.com/qaxEr83.png" id="lightsaber"></img><div id="saberblade"></div></button></div>');   
                }
            }


            
         //end of game object

    });