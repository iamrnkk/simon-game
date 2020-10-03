
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function(e){
    if(e.which==32 ||e.which==13) e.preventDefault();
});
$('#level-title').click(function() {
  if (!started) {
    $('#level-title').fadeOut(1000, function()
    {
        $(this).html("level " +level).fadeIn(1000);
    });
    setTimeout(function () {
      nextSequence();
    }, 1200);
    started = true;
  }
});

$('.start').click(function() {
  $(".start").animate({
    left: '-=500px',
    opacity: 0
  },500);

  if ($(window).width() >= 600) {
  $(".colors").delay(400).animate({
      // right: "+=30px",
      margin: '+=23px',
      height: '+=150px',
      width: '+=150px'
    },1500);
    
   }

   if ($(window).width() < 600) {
     $(".colors").delay(400).animate({
      // right: "+=30px",
      margin: '+=3px',
      height: '+=35px',
      width: '+=35px'
    },1500);
    }
    
    $('#level-title').fadeOut(1000, function()
    {
        $(this).html("Click here to Start").fadeIn(1000);
    });

});

$(".colors").click(function() {
  if(level > 0){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
}
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Click here to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
