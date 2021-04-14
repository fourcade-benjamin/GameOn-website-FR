function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// LAUNCH MODAL EVENT
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

/*//INPUT

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");

modalbg.addEventListener("submit", (e) => {
  checkInputs();
});

function checkInputs() {
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();

  if (first === "") {
    console.log();
  }
}
*/

// FORM

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("tournaments");
const checkbox = document.getElementById("checkbox1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const firstValue = first.value.trim();
  const emailValue = email.value.trim();
  const lastValue = last.value.trim();
  const birthdateValue = birthdate.value.trim();
  const tournamentsValue = tournaments.value.trim();
  const checkboxValue = checkbox1.value;

  if (firstValue === "") {
    //show error
    //add error class
    setErrorFor(first, "username cant be blank");
  } else if (firstValue.length < 2) {
    setErrorFor(first, "username with 2 letters");
  } else {
    //succes class
    setSuccessFor(first);
  }

  if (lastValue === "") {
    //show error
    //add error class
    setErrorFor(last, "Last name cant be blank");
  } else if (lastValue.length < 2) {
    setErrorFor(last, "username with 2 letters");
  } else {
    //succes class
    setSuccessFor(last);
  }

  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "email cant be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email is not valide");
  } else {
    //succes class
    setSuccessFor(email);
  }

  if (birthdateValue === "") {
    //show error
    //add error class
    setErrorFor(birthdate, "select your birthdate");
  } else {
    //succes class
    setSuccessFor(birthdate);
  }

  if (tournamentsValue === "") {
    //show error
    //add error class
    setErrorFor(tournaments, "select a number");
  } else {
    //succes class
    setSuccessFor(tournaments);
  }

  if (birthdateValue === "") {
    //show error
    //add error class
    setErrorFor(birthdate, "select your birthdate");
  } else {
    //succes class
    setSuccessFor(birthdate);
  }

  if (checkboxValue === "") {
    //show error
    //add error class
    setErrorFor(checkbox1, "select your location");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");
  //add error message inside small

  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
