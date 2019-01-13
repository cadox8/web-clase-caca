// Change Copy date
$(document).ready(function() {
  $("#year").text(new Date().getFullYear());
});

// Navbar
$(function() {
  $('.hide').on('click',function() {
    $('nav ul').toggleClass('show');
  });
})

// Close alert
$(function() {
  $(".is-icon").on("click", function() {
    $(".is-icon").parent().hide();
  });
})

function show(id) {
  hideAll();
  $("#" + id).toggleClass("hidden");
}

function hideAll() {
  if (!$("#Staggeringbeauty").hasClass("hidden")) $("#Staggeringbeauty").toggleClass("hidden");
  if (!$("#despacito2").hasClass("hidden")) $("#despacito2").toggleClass("hidden");
  if (!$("#mercadona").hasClass("hidden")) $("#mercadona").toggleClass("hidden");
  if (!$("#yep").hasClass("hidden")) $("#yep").toggleClass("hidden");
  if (!$("#info").hasClass("hidden")) $("#info").toggleClass("hidden");
}
