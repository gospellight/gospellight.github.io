function myFunction(x) {
    x.classList.toggle("change");
    $('nav li').slideToggle();
}

$(document).ready(function(){
	$("#display").html($(window).width());

// document.querySelector('a').addEventListener('click', function(){
//   document.querySelector('.left').classList.toggle('expand');
//   alert("test");
// });

// var offsetTop = $('#main div').offset().top-200;

// 	$(window).scroll(function(){
// 	  var scrollTop = $(window).scrollTop();
// 	  if(scrollTop > offsetTop){
// 	  	$('p').show('fast');
//   		 $('.left').css("width", "70%");
//   		}
// 	});


});

$(window).resize(function() {
	location.reload();
        $("#display").html(
        $(window).width());
});

// function showP() {
// 	var offsetTop = $(this).offset().top-200;

// 	$(window).scroll(function(){
// 	  var scrollTop = $(window).scrollTop();
// 	  if(scrollTop > offsetTop){
// 	    $('p').show('fast');
// 	  }
// 	});
// }

function expand() {
var offsetTop = $('div').offset().top-200;

	$(window).scroll(function(){
	  var scrollTop = $(window).scrollTop();
	  if(scrollTop > offsetTop){
	  	// $('p').show('fast');
  		 $(this).css("width", "70%");
  		}
	});
}

