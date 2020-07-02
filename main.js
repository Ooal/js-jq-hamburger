/*$('i.fa-bars').click(function () {
 $(".hamburger-menu").show();
});
$('i.fa-times').click(function () {
 $(".hamburger-menu").hide();
});*/

$("i.fa-bars ").click( function(){
  $(".hamburger-menu").addClass("active");
});
$("i.fa-times").click( function(){
  $(".hamburger-menu").removeClass("active");
});
