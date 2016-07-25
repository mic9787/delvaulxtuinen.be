var headerComponent = 'http://localhost:8888/resources/html/components/header.html';

$( document ).ajaxComplete(function( event, xhr, settings ) {
  if ( settings.url = headerComponent ) {
        var nav = responsiveNav(".nav-collapse", {
        customToggle: "#js-toggle-nav"
    });
  }
});