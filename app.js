$(document).ready(function() {
let lowestOfLows="+=10px";
let lowest = '+=20px';
let low='+=50px';
let mid='+=75px';
let high='+=120px';
let orig='0px';

let player1 = 100;
let score=0;


$('.turb').on('click', function(){
    moneyLeft(player1-=5);
    orig=lowestOfLows;
    score+=5;
    $('img').animate({
    'margin-top':orig,
  })
});



$('.turb1').on('click', function(){
    moneyLeft(player1-=10);
    orig=lowest;
    score+=10;
    $('img').animate({
    'margin-top':orig,
  })
});

$('.turb2').on('click', function(){
    moneyLeft(player1-=20);
    orig=low;
    score+=20;
    $('img').animate({
    'margin-top':orig,
  })
});


$('.turb3').on('click', function(){
    moneyLeft(player1-=40);
    orig=mid;
    score+=40;
    $('img').animate({
    'margin-top':orig,
  })
});

$('.turb4').on('click', function(){
    moneyLeft(player1-=60);
    orig=high;
    score+=60;
    $('img').animate({
    'margin-top':orig,
  })
});

function moneyLeft(n) {
if(n===0){
	alert("You are out of money! Game over! Your score is "+score);
	setTimeout(function(){ 
		return window.location = window.location; 
	}, 3000);

} else if(n<0){
		alert("You spent more money then you have! Your score has been penalized! Game over! Your score is "+(score-25));
	setTimeout(function(){ 
		return window.location = window.location; 
	}, 3000);
}
}


});