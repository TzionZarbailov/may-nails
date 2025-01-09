function showLogin() {
  document.querySelector(".login-box").classList.add("active");
  document.querySelector(".signup-box").classList.remove("active");
}

function showSignup() {
  document.querySelector(".signup-box").classList.add("active");
  document.querySelector(".login-box").classList.remove("active");
}
