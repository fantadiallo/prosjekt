const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const LastName = document.querySelector("#LastName");
const LastNameError = document.querySelector("#LastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const text = document.querySelector("#text");
const textError = document.querySelector("#textError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(firstName.value, 3) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(password.value, 7) === true) {
    passwordError.style.display = "none";
  } else {
    password.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateForm(email) {
  const regEx = /\s+@\s+\s+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

//if (firstNameError.value.trim().length > ){
//firstName.style.display = "none";
//}else{
//firstName.style.style.display = "block";
//}
//if (LastName.value.trim().length > 3){
//LastNameError.style.display = "none";
//}else{
//LastNameError.style.display = "block";
//}
