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

//CLOSE
let closer = document.getElementById("closer");

//

closer.onclick = function () {
  modalbg.style.display = "none";
};

//

// FORM

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("tournaments");
const checkbox = document.getElementById("checkbox1");

/*form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});*/

validate();
function validate() {
  const firstValue = first.value.trim();
  const emailValue = email.value.trim();
  const lastValue = last.value.trim();
  const birthdateValue = birthdate.value.trim();
  const tournamentsValue = tournaments.value.trim();
  //
  if (firstValue === "") {
    //show error
    //add error class
    setErrorFor(first, "username cant be blank");
    return false;
  } else if (firstValue.length < 2) {
    setErrorFor(first, "username with 2 letters");
    return false;
  } else {
    //succes class
    setSuccessFor(first);
  }
  //
  if (lastValue === "") {
    //show error
    //add error class
    setErrorFor(last, "Last name cant be blank");
    return false;
  } else if (lastValue.length < 2) {
    setErrorFor(last, "username with 2 letters");
    return false;
  } else {
    //succes class
    setSuccessFor(last);
  }
  //
  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "email cant be blank");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email is not valide");
    return false;
  } else {
    //succes class
    setSuccessFor(email);
  }
  //
  if (birthdateValue === "") {
    //show error
    //add error class
    setErrorFor(birthdate, "select your birthdate");
    return false;
  } else {
    //succes class
    setSuccessFor(birthdate);
  }
  //
  if (tournamentsValue === "") {
    //show error
    //add error class
    setErrorFor(tournaments, "select a number");
    return false;
  } else {
    //succes class
    setSuccessFor(tournaments);
  }
  //
  /*let radio = document.getElementsByClassName("checkbox-input");
  let ischecked_method = false;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      ischecked_method = true;
      document.getElementById("rad").innerHTML = "";
      break;
    } else {
      //payment method button is not checked
      document.getElementById("rad").innerHTML = "select your location";
      return false;
    }
  }*/
  var radio = document.querySelector('input[name = "location"]:checked');

  if (radio != null) {
    document.getElementById("rad").innerHTML = "";
    //Test if something was checked
  } else {
    document.getElementById("rad").innerHTML = "select your location";
    return false;
  }

  //

  //
  if (!checkbox.checked) {
    document.getElementById("term").innerHTML = "accept the terms";
    return false;
  } else {
    document.getElementById("term").innerHTML = "";
  }
  alert("ok");
}

/*function checkInputs() {
  // get the values from the inputs
  const firstValue = first.value.trim();
  const emailValue = email.value.trim();
  const lastValue = last.value.trim();
  const birthdateValue = birthdate.value.trim();
  const tournamentsValue = tournaments.value.trim();

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

  let radio = document.getElementsByName("location");
  let ischecked_method = false;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      ischecked_method = true;
      document.getElementById("rad").innerHTML = "";
      break;
    } else {
      //payment method button is not checked
      document.getElementById("rad").innerHTML = "select your location";
    }
  }

  if (!checkbox.checked) {
    document.getElementById("term").innerHTML = "accept the terms";
  } else {
    document.getElementById("term").innerHTML = "";
  }
}*/

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

//  RADIO onsubmit="return validate();"
