$(document).ready( function() {
  
  $(".open").click( function() {
    var hidden = $(this).attr('id') + '-hid';
    $('#' + hidden).slideToggle('slow',function() {
      // Animation complete.
    });
    return false;
  });
      
  $( ".graphnav a" ).click( function() {
    var temp = $( this ).attr( "class" );
    $( this ).closest( ".graphnav" ).nextAll( ".graphspace" ).each( function() {
      if ( $( this ).hasClass( temp ) ) {
        $( this ).css( "display", "block" );
      } else {
        $( this ).css( "display", "none" );
      }
    });
    return false;
  });

});
