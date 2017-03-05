console.log('Test Sourced');

var onReady = function() {
  console.log('doc ready');
  $( '.cardImg' ).hide();
  //TODO Add your code below to attach your event listeners to functions:
$( 'cardDiv' ).on('click', function(){
    revealHide();
});
$( 'cardDiv' ).on('click', function(){
    singleClickFunc();
});






};

// on document ready run the onReady function
$(document).ready(onReady);


// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  $( '.cardImg' ).show();
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {

  //TODO add your code here to get the desired functionality

}
