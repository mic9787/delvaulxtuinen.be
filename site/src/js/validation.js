function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
  var mail = document.getElementById('email').value;
  var a = document.forms["form"]["name"].value;
  var b = document.forms["form"]["adres"].value;
  var c = document.forms["form"]["phone"].value;
  var d = document.forms["form"]["email"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "" || !validateEmail(mail)) {
    document.getElementById('alert').parentElement.classList.remove('hidden');
    return false;
  } else {
    document.getElementById('alert').parentElement.classList.add('hidden');

  }
}
if (document.body.contains(document.getElementById('company'))) {
  document.getElementById('company').addEventListener('change', function (evt) {
      var company = document.forms["form"]["company"].value;
      if (company == null || company == "") {
        this.parentElement.classList.remove('valid');
      } else {
        this.parentElement.classList.add('valid');

      }
  });
}



// if (typeof HTMLInputElement.prototype.checkValidity === 'function') {
//   alert('ok')
// } else {
//  alert('nok')
// }

var form = document.getElementById('offer');
form.noValidate = true;
form.addEventListener('submit', function(event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        event.preventDefault(); // dismiss the default functionality
        alert('Please, fill the form'); // error message

    }
}, false);

// document.getElementById('email').addEventListener('change', function (evt) {
//     var mail = this.value;
//     if (!validateEmail(mail)) {
//       this.parentElement.classList.add('has-error');
//     } else {
//       this.parentElement.classList.remove('has-error');
//     }
// });

// document.getElementById('btn-submit').addEventListener("click", validateForm);
