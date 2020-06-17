// $(document).ready(function(){

// $('.toggle').click(function(){
// 	$('.menu').toggleClass('slide_menu')
// });

// });

$(document).ready(function(){

  $(".toggle").click(function(){
    $(".menu").toggleClass("slide_menu");
  });

  $("#close_bnt").click(function(){
    $(".menu").hide("slow", function(){
    });
  });

});

// navbar fixed script 

  window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // navbar fixed script END

 