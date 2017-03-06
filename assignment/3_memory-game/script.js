console.log('Test Sourced');

var onReady = function() {
  console.log('doc ready');
  $( '.cardImg' ).hide();
  //TODO Add your code below to attach your event listeners to functions:
$( '#revealHide' ).on('click', function(){
    console.log('Hide me!');
    revealHide();
});

$( '.cardDiv' ).click(singleClickFunc);


};

// on document ready run the onReady function
$(document).ready(onReady);


// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  $( '.cardImg' ).toggle();
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {
        $(this).children().toggle();

  //TODO add your code here to get the desired functionality

}
