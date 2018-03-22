/* requires:
sidebar.js
*/
// Initialize Firebase

var offer = document.getElementById('offer');
if (offer != null) {

    var config = {
        apiKey: "AIzaSyB6Ub0uvrNWlpIOBmmdaUeQ9vQ1pL07LGc",
        authDomain: "delvaulxtuinen-8e507.firebaseapp.com",
        databaseURL: "https://delvaulxtuinen-8e507.firebaseio.com",
        projectId: "delvaulxtuinen-8e507",
        storageBucket: "delvaulxtuinen-8e507.appspot.com",
        messagingSenderId: "464985209629"
    };
    firebase.initializeApp(config);

    // Reference messages collection
    var messagesRef = firebase.database().ref('offertes');

    // Listen for form submit
    document.getElementById('offer').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e) {
        e.preventDefault();
        if (document.getElementById('slider1').value === '0') {
            document.getElementById('invalid').classList.remove('hidden');
            return false;
        } else {
            document.getElementById('invalid').classList.add('hidden');

        }
        // Get values
        var name = getInputVal('name');
        var city = getInputVal('city');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        var message = getInputVal('message');
        var acreage = getInputVal('slider1');
        var typeOfWork = getRadioValTypeOfWork();
        var phone = getInputVal('phone');
        var company = getRadioValCompany();
        var companyName = getInputVal('companyName');
        // Save message
        saveMessage(name, email, phone, city, company, companyName, message, typeOfWork, acreage);

        // Show alert
        document.querySelector('.alert-valid').classList.remove('hidden');
        document.getElementById('offer').classList.add('hidden');

        // Clear form
        document.getElementById('offer').reset();
    }

    // Function to get get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    function getRadioValTypeOfWork() {
        return document.querySelector('input[name="typeOfWork"]:checked').value
    }

    function getRadioValAcreage() {
        return document.querySelector('input[name="acreage"]:checked').value
    }

    function getRadioValCompany() {
        return document.querySelector('input[name="company"]:checked').value
    }

    function getSwitchVal(id) {
        return document.getElementById(id).checked
    }

    // Save message to firebase
    function saveMessage(name, email, phone, city, company, companyName, message, typeOfWork, acreage) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            phone: phone,
            city: city,
            message: message,
            companyOrPrivate: company,
            companyName: companyName,
            typeOfWork: typeOfWork,
            acreage: acreage
        });
    }

    // function switchToggle() {
    //     var switcher = document.getElementById("switch");
    //     if(switcher.checked){
    //       document.querySelector('.form-group.hidden').classList.remove("hidden");
    //     } else {
    //       switcher.parentElement.nextElementSibling.classList.add("hidden");;
    //     }
    // }
    function toggleCompanyInput() {
        var company = document.getElementById("Bedrijf");
        if (company.checked) {
            document.querySelector('#company-name').classList.remove("hidden");
        } else {
            document.querySelector('#company-name').classList.add("hidden");
        }
    }
}
