//select input tag, para, score
//var enterNum=document.getElementById("number");
var para=document.getElementById("result");
var Score=document.getElementById("score");
//var enterNumber=enterNum.textContent;

//generate random number
var randomNum=Math.random()*10;
var randomNumber=Math.floor(randomNum)+1;
var TotalScore=10;


function check(){
  var enterNum=document.getElementById("number");
 
var enterNumber=enterNum.value;


var enteredNumber=Number(enterNumber);
  if(randomNumber==enteredNumber){
    alert("You Won......");
  }
  else{
   
    para.textContent="Wrong";
    TotalScore-=1;
    Score.textContent="Score:"+TotalScore;
    //console.log("Score:"+TotalScore);
  }
}
