$(document).ready(function() {
let lowestOfLows="+=15px";
let lowest = '+=20px';
let low='+=50px';
let mid='+=75px';
let high='+=120px';
let orig='0px';

let player1 = 100;
let score=0;

$('.turb5').change(function() {
  if ($('.turb5').is(':checked')) {
  	moneyLeft(player1-=5);
  	orig=lowestOfLows;
    score+=5;
    $('img').animate({
		'margin-top':orig,
	})
  } else{
  	console.log(player1);
  }
});

$('.turb').change(function() {
  if ($('.turb').is(':checked')) {
  	moneyLeft(player1-=20);
  	orig=low;
    score+=20;
    $('img').animate({
		'margin-top':orig,
	})
  } else{
  	console.log(player1);
  }
});


$('.turb1').change(function() {
  if ($('.turb1').is(':checked')) {
  	score+=40;
  	moneyLeft(player1-=40);
  	orig=mid;
  	  $('img').animate({
		'margin-top':orig,
	})
  } else{
  	console.log(player1);
  }
});


$('.turb2').change(function() {
  if ($('.turb2').is(':checked')) {
  	score+=60;
  	moneyLeft(player1-=60);
  	orig=high;
      $('img').animate({
		'margin-top':orig,
	})
  } else{
  	console.log(player1);
  }
});

$('.turb3').change(function() {
  if ($('.turb3').is(':checked')) {
  	score+=10;
  	moneyLeft(player1-=10);
  	orig=lowest;
    $('img').animate({
		'margin-top':orig,
	})
  } else{
  	console.log(player1);
  }
});


function moneyLeft(n) {
if(n<=0){
	alert("You are out of money! Game over! Your score is "+score);
	setTimeout(function(){ 
		return window.location = window.location; 
	}, 3000);
}
}


});