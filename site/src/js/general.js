// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
coded = "1rvvx9r3@SpfKrafmva9zpz.UR1"
key = "5ZGf3MeQUS60XTREy91zaK7wbYx4ktLCIpHPqVls2gNcdjFrBoAWimnuvJ8DOh"
shift = coded.length
link = ""
for (i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
    } else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
    }
}
var footer = document.getElementById('js-footer');
if (footer != null) {
    footer.firstElementChild.innerHTML += "<li><a href='mailto:"+link+"'>"+link+"</a></li>";
}
