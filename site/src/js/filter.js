var filter = document.getElementById('js-filter');
if (filter != null) {

    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("cat-item");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
          addClass(x[i], "show");
        } else {
          addClass(x[i], "hidden");
        }
      }
    }

    // Show filtered elements
    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }

    }

    // Hide elements that are not selected
    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    var select = document.getElementById('js-filter');
    select.addEventListener('change',function (e){
        var selectVal = select.value
        if (selectVal == 'aanleg') {
            filterSelection('js-aanleg')
        } else if (selectVal == 'border'){
            filterSelection('js-border')
        } else if (selectVal == 'gazon'){
            filterSelection('js-gazon')
        } else if (selectVal == 'bomen'){
            filterSelection('js-bomen')
        } else {
            filterSelection('all')
        }
    })

}
