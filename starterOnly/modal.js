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
