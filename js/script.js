var start = document.getElementById("starter");
var mainScreen = document.getElementById("header")
//im adding variables for questions and answers that ill end up repeating more than twice
var question2 = "The condition in an if / else statement is enclosed within _______."
var question3 = "Arrays in JavaScript can be used to store _______."
var question4 = "String values mustbe enclosed within ______ when being assigned to variables."
var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:"
var $wrongAnswer1 = $( "<button class = 'buttons wrongTwo'>1. Quotes</button>")
var $wrongAnswer2 = $( "<button class = 'buttons wrongTwo'>2. Curly Brackets</button>")
var $wrongAnswer3 = $( "<button class = 'buttons wrongTwo'>4. Square Brackets</button>")
var $wrongAnswer4 = $( "<button class = 'buttons wrongThree'>1. Numbers and Strings</button>")
var $wrongAnswer5 = $( "<button class = 'buttons wrongThree'>2. Other Arrays</button>")
var $wrongAnswer6 = $( "<button class = 'buttons wrongThree'>3. Booleans</button>")
var $wrongAnswer7 = $( "<button class = 'buttons wrongFour'>1. Commas</button>")
var $wrongAnswer8 = $( "<button class = 'buttons wrongFour'>2. Curly Brackets</button>")
var $wrongAnswer9 = $( "<button class = 'buttons wrongFour'>4. Parentheses</button>")
var $wrongAnswer10 = $( "<button class = 'buttons wrongFive'>1. JavaScript</button>")
var $wrongAnswer11 = $( "<button class = 'buttons wrongFive'>2. Terminal/ Bash</button>")
var $wrongAnswer12 = $( "<button class = 'buttons wrongFive'>3. For Loops</button>")
var $wrongAnswer13 = $( "<button class = 'buttons wrong' id = 'wrongOne' >1. Strings</button>")
var $wrongAnswer14 = $( "<button class = 'buttons wrong id = 'wrongTwo'>2. Booleans</button>")
var $wrongAnswer15 = $( "<button class = 'buttons wrong'>4. Numbers</button>")
    

var $rightAnswer = $( "<button class = 'buttons rightTwo'>3. Parentheses</button>" )
var $rightAnswer2 = $( "<button class = 'buttons rightThree'>4. All of the Above</button>" )
var $rightAnswer3 = $( "<button class = 'buttons rightFour'>3. Quotes</button>" )
var $rightAnswer4 = $( "<button class = 'buttons rightFive'>4. console.log</button>" )
var $rightAnswer5 = $( "<button class = 'buttons right'>3. Alerts</button>" )


var timer = 60
var timestop = false



var finalDisplay = function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    timestop= true;
    $(".buttons").remove();
    mainScreen.textContent = "All Done!"
    $(".body").append("<h2 id = 'scoreDisplay'>Your Final Score is : " + timer + "</h2>")
    $("#buttonHolder").append("<h2 id = 'brief'>Enter Initials :   </h2>")
    $("#buttonHolder").append("<input type='text' class='initialInput'></input>")
    $("#buttonHolder").append("<button class='buttons submit'>Submit!</button>")
    $("#buttonHolder").addClass("flexFix")
    $("#scoreHolder").remove()
      
}
var finalDisplayTime = function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    var name = document.getElementsByClassName("initialInput")
    $(".buttons").remove();
    mainScreen.textContent = "All Done!"
    $(".body").append("<h2 id = 'scoreDisplay'>Your Final Score is : " + timer + "</h2>")
    $("#buttonHolder").append("<h2 id = 'brief'>Enter Initials :   </h2>")
    $("#buttonHolder").append("<input type='text' class='initialInput'></input>")
    $("#buttonHolder").append("<button class='buttons submit'>Submit!</button>")
    $("#buttonHolder").addClass("flexFix")
    $("#scoreHolder").remove()
    
    $(".submit").on("click", function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log("lol")
        var namesave = name.value 
            var score = timer.toString()
            localStorage.setItem( namesave, score )
             
            
        })
    
    }
    
    
    
    // var displayEndScr
    
    start.addEventListener("click", function(){
        const timerInterval = setInterval(quizTimer(), 1000);
        
        function quizTimer() {
        if(timer > 0 && timestop === false){
            timer = timer-1
            document.getElementById("scoreHolder").innerHTML = timer;
        }
        else {
            finalDisplayTime(event);
            clearInterval(timerInterval);
        }

    }
    

    mainScreen.textContent = "Commonly used data types DO NOT include:"
    $(mainScreen).addClass("question")
    start.remove();
    document.getElementById("brief").remove();
    document.getElementById("highScores").remove();

    $("#buttonHolder").append($wrongAnswer13)
    $("#buttonHolder").append($wrongAnswer14)
    $("#buttonHolder").append($rightAnswer5)
    $("#buttonHolder").append($wrongAnswer15)
        $(".wrong").on('click', function(event){
            event.stopPropagation();
            event.stopImmediatePropagation();
            $(".buttons").remove();
            mainScreen.textContent = question2;
            $("#buttonHolder").append($wrongAnswer1)
            $("#buttonHolder").append($wrongAnswer2)
            $("#buttonHolder").append($rightAnswer)
            $("#buttonHolder").append($wrongAnswer3)
            timer=timer-10;

     
                $(".wrongTwo").on('click', function(event){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    $(".buttons").remove();
                    mainScreen.textContent = question3;
                    timer=timer-10;
                    
                    $("#buttonHolder").append($wrongAnswer4)
                    $("#buttonHolder").append($wrongAnswer5)
                    $("#buttonHolder").append($wrongAnswer6)
                    $("#buttonHolder").append($rightAnswer2)
                        $(".wrongThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
                            timer=timer-10;
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                                    timer=timer-10;
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)

                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event));
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })
                        $(".rightThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    timer=timer-10;
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                    
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })
                })
                $(".rightTwo").on('click', function(event){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    $(".buttons").remove();
                    mainScreen.textContent = question3;
                    $("#buttonHolder").append($wrongAnswer4)
                    $("#buttonHolder").append($wrongAnswer5)
                    $("#buttonHolder").append($wrongAnswer6)
                    $("#buttonHolder").append($rightAnswer2)
                        $(".wrongThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                            timer=timer-10;
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(event){
                                        event.stopPropagation();
                                        event.stopImmediatePropagation();
                                        $(".buttons").remove();
                                        timer=timer-10;
                                        mainScreen.textContent = "All Done!"
                                        $(".body").append("<h2 id = 'scoreDisplay'>Your Final Score is : " + timer + "</h2>")
                                        $("#buttonHolder").append("<h2 id = 'brief'>Enter Initials :   </h2>")
                                        $("#buttonHolder").append("<input type='text' class='initialInput'></input>")
                                        $("#buttonHolder").append("<button class='buttons submit'>Submit!</button>")
                                        $("#buttonHolder").addClass("flexFix")
                                        $("#scoreHolder").remove()
                                    })
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })

                        $(".rightThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })   
                })
            })
        


        $(".right").on('click', function(event){
            event.stopPropagation();
            event.stopImmediatePropagation();
            $(".buttons").remove();
            mainScreen.textContent = question2;
            $("#buttonHolder").append($wrongAnswer1)
            $("#buttonHolder").append($wrongAnswer2)
            $("#buttonHolder").append($rightAnswer)
            $("#buttonHolder").append($wrongAnswer3)

                $(".wrongTwo").on('click', function(event){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    $(".buttons").remove();
                    mainScreen.textContent = question3;

                    
                    $("#buttonHolder").append($wrongAnswer4)
                    $("#buttonHolder").append($wrongAnswer5)
                    $("#buttonHolder").append($wrongAnswer6)
                    $("#buttonHolder").append($rightAnswer2)
                    timer=timer-10;
                        $(".wrongThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                            timer=timer-10;
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })
                        $(".rightThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })
                })
                $(".rightTwo").on('click', function(event){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    $(".buttons").remove();
                    mainScreen.textContent = question3;
                    $("#buttonHolder").append($wrongAnswer4)
                    $("#buttonHolder").append($wrongAnswer5)
                    $("#buttonHolder").append($wrongAnswer6)
                    $("#buttonHolder").append($rightAnswer2)
                        $(".wrongThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                            })
                        $(".rightThree").on('click', function(event){
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            $(".buttons").remove();
                            mainScreen.textContent = question4;
        
                            
                            $("#buttonHolder").append($wrongAnswer7)
                            $("#buttonHolder").append($wrongAnswer8)
                            $("#buttonHolder").append($rightAnswer3)
                            $("#buttonHolder").append($wrongAnswer9)
                                $(".wrongFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    timer=timer-10;
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                                $(".rightFour").on('click', function(event){
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                                    $(".buttons").remove();
                                    mainScreen.textContent = question5;
                
                                    
                                    $("#buttonHolder").append($wrongAnswer10)
                                    $("#buttonHolder").append($wrongAnswer11)
                                    $("#buttonHolder").append($wrongAnswer12)
                                    $("#buttonHolder").append($rightAnswer4)
                                    $(".wrongFive").on('click', function(){
                                        timer=timer-10;
                                        timestop = true
                                    });
                                    $(".rightFive").on('click', finalDisplay(event))
                                })
                        })
                })     
                
        })
        
    
    
})



