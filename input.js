
// Initiate externals

$(function(){ 
  $("[data-role=header]").toolbar({ theme: "a" }).enhanceWithin();
  $("[data-role=footer]").toolbar({ theme: "a" }).enhanceWithin();
  $("[data-role=slider]").slider().enhanceWithin();
});

$(document).ready( function() {

  // Open additional story
  $("[data-role=slider]").change( function() {
    var target = $(this).attr("id");
    $('#' + target + '-open').slideToggle("slow", function() {
      // Animation complete.
    });
  });

  // Open social
  $(".social-slide").change( function() {
    var target = $(this).attr("id");

    if ($('#' + target + ' option:selected').val() == 'on') {
      $('#' + target + '-default').slider('enable');
    } else {
      $('#' + target + '-default').slider('disable');
    }
  });

  // Open social
  $(".social-default").change( function() {
    var target = $(this).attr("id");

    if ($('#' + target + ' option:selected').val() == 'on') {
      $('#' + target + '-handle').textinput('enable');
    } else {
      $('#' + target + '-handle').textinput('disable');
    }
  });

});
