var color=["green","red","blue","yellow"]
var sequence=[];
var stage=0;
var gameOver=false;
document.addEventListener("keypress",gameStart)

function gameStart()
{
  stage++;
  if (gameOver===false)
   {
   console.log("works");
   var x= Math.ceil(Math.random()*4)-1;
   console.log(x);
   sequence.push(color[x]);
    console.log(sequence);
    $("#level-title").html("level "+stage);
    var currentColor= sequence[stage-1];
    $("#"+currentColor).fadeIn(100).fadeOut(100).fadeIn(100);

      // if (sequence[stage-1]==) {
      //   $(".green").fadeOut().delay(100).fadeIn();
      // }
      // else if (sequence[stage-1]==2) {
      //   $(".red").fadeOut().delay(100).fadeIn();
      //   }
      //   else if (sequence[stage-1]==3) {
      //     $(".blue").fadeOut().delay(100).fadeIn();
      //   }
      //   else{
      //     $(".yellow").fadeOut().delay(100).fadeIn();
      //   }



  }
}
