var headerComponent = 'http://localhost:8888/resources/html/components/header.html';

$( document ).ajaxComplete(function( event, xhr, settings ) {
  if ( settings.url = headerComponent ) {
        var nav = responsiveNav(".nav-collapse", {
        customToggle: "#js-toggle-nav"
    });
  }
});

// DEV only
$(function () {
    // header
    jQuery.get("resources/html/components/header.html", function (result) {
        jQuery("#header-placeholder").replaceWith(result);
    });
    // hero header
    jQuery.get("resources/html/components/footer.html", function (result) {
        jQuery("#footer-placeholder").replaceWith(result);
    });
    // homepage
    jQuery.get("resources/html/components/home.html", function (result) {
        jQuery("#home-placeholder").replaceWith(result);
    });
    // hero header
    jQuery.get("resources/html/components/hero.html", function (result) {
        jQuery("#hero-placeholder").replaceWith(result);
    });
    
});