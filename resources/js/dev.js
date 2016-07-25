$(function () {
    // header
    jQuery.get("resources/html/components/header.html", function (result) {
        jQuery("#header-placeholder").replaceWith(result);
    });
    // homepage
    jQuery.get("resources/html/components/home.html", function (result) {
        jQuery("#home-placeholder").replaceWith(result);
    });
    
    
});