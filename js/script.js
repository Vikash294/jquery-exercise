
console.log('my script is working');

$('.morePara').hide();
$('.lessBtn').hide();
$('.btn').show();


$(document).ready(function(){

  $('.fas').click(function(){
    $('nav').toggleClass('active');
  });//fas
  // $('#close').click(function(){
  //   $('nav').hide();
  // })
  // $('.btn').click(function(){
  //   $('.morePara').show();
  //   $('.lessBtn').show();
  //   $(this).hide();
  // })//lessBtn
  //
  // $('.lessBtn').click(function(){
  //   $('.morePara').hide();
  //   $(this).hide();
  //   $('.btn').show();
  //
  // })//lessBtn
 // $('.btn'). click(function(){
 //   $('.morePara').toggle();
 // });

 $('.btn').click(function(){
   $('.morePara').slideToggle(3000);
 });

 $('#variables').click(function(){
   $('html, body').animate({
     scrollTop: $('#features').offset().top + 200 }, 3000);
   });





});//document ready
