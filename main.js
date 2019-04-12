// When the user clicks on <div>, open the popup
function myFunction1() {
  let popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function myFunction2() {
  let popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
};

$(document).ready(function(){

  $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active');
  });
});

$(document).ready(function(){

  $('.menu-toggle').on('click',function() {
  
    $('.site-nav').toggleClass('site-nav--open', 500);
  });

});

