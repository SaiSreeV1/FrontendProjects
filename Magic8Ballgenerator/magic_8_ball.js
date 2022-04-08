$(document).ready(function() {
// This page uses JQuery

// this is page loading function for every refresh of page
console.log("hello starting");
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
  
    $("#answer").hide();
  
    magic8Ball.askQuestion = function(question) {
      console.log("on ask question function after asking prompt");
      $("#8ball").effect("shake");
  
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
      $("#answer").fadeIn(4000);
  
      var randomNumber = Math.random();
  
      var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
      var randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      var answer = this.listOfAnswers[randomIndex];
  
      $("#answer").text(answer);
  
      console.log(question);
      console.log(answer);
    };
  
    var onClick = function() {
  console.log("on question button before asking prompt");
      $("#answer").hide();
  
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
  
      setTimeout(function(){
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
      }, 50000);
      console.log("on question button after asking prompt");
  
    };
  
    $("#questionbutton").click(onClick);
  
  });