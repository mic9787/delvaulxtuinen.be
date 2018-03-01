/* requires:
sidebar.js
*/
// Initialize Firebase
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
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var city = getInputVal('city');
  // var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var acreage = getInputVal('slider1');
  var typeOfWork = getRadioValTypeOfWork();
  // Save message
  saveMessage(name, email, phone, city, message, typeOfWork, acreage);

  // Show alert
  document.querySelector('.alert-valid').style.display = 'block';
  for (let el of document.querySelectorAll('.form-section')) el.style.display = 'none';


  // Hide alert after 3 seconds
  setTimeout(function(){
    // document.querySelector('.alert-valid').style.display = 'none';
    resetMenu();
  },3000);

  // Clear form
  document.getElementById('offer').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
function getRadioValTypeOfWork(){
  return document.querySelector('input[name="typeOfWork"]:checked').value
}
function getRadioValAcreage(){
  return document.querySelector('input[name="acreage"]:checked').value
}
// function getSliderVal(id){
//   return document.getElementById(id).value;
// }

// Save message to firebase
function saveMessage(name, email, phone, city, message, typeOfWork, acreage){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    city: city,
    message: message,
    // company: company,
    typeOfWork: typeOfWork,
    acreage: acreage
  });
}
// show or hide form
// var offerForm = document.getElementById('offer');
// function showOffer() {
//   offerForm.classList.toggle("hidden");
// }
// document.getElementById("js-showOffer").onclick = function() {
//   showOffer()
// };
