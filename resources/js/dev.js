$(function () {
    // header
    jQuery.get("resources/html/components/header.html", function (result) {
        jQuery("#header-placeholder").replaceWith(result);
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