$(window).load( function() {

  $('body').css('display','none');

  var getin = prompt("Password required:","");

  if (getin=="magicalersatz") {

    $('body').css('display','block');

  }
  else {
    
    location.href='/nope/'

  } 

});
