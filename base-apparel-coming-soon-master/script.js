const img = document.querySelector(".img-container img");
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const email = document.getElementById("email");
const msg = document.querySelector(".msg");

const showMessage = function (text) {
  msg.textContent = text;
  msg.style.display = "block";
  form.classList.add("error");
};

const hideMessage = function () {
  msg.style.display = "none";
  form.classList.remove("error");
  email.value = "";
};

window.onresize = function () {
  if (window.innerWidth <= 767) {
    img.src = "images/hero-mobile.jpg";
  } else {
    img.src = "images/hero-desktop.jpg";
  }
};

submit.onclick = function (e) {
  e.preventDefault();

  const pattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim().length === 0) {
    showMessage("Please enter your email address");
  } else if (!pattern.test(email.value)) {
    showMessage("Please provide a valid email");
  } else {
    hideMessage();
  }
};
