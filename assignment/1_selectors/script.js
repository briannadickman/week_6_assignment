// 5-1 Challenge

console.log('JS loaded');

/*
See the README.md file for instructions
*/
$(document).ready(function(){
  console.log("jQuery is here");
});

var onReady = function() {
  console.log('DOM ready');

  // 1 - hide just the h1 inside header
  // write your code for question 1 here.
$('h1').hide();

  // 2 - change the background color of 'step-two' to yellow
  // write your code for question 2 here.
$('#step-two').css("background-color", "yellow");

  // 3 - fadout example elements
  // 3 bonus - wait one second and fade back in
  // write your code for question 3 here.
$('.example-list').fadeOut(1500, function(){
    $('.example-list').delay(1000);
    $('.example-list').fadeIn(1500);
});

  // 4 - select all odd list items and change to blue
  // write your code for question 4 here.
$('li:nth-child(odd)').css('color', 'blue');

  // 5 - select the last list item with a pseudo selector
  // write your code for question 5 here.
$('li:last').css('font-family', 'cursive');

  // 6 - select the last list item with traversal
  // write your code for question 6 here.
$('ol:last').css('color', 'red');
};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
