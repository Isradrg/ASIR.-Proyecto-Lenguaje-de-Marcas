function validateUsername(username) {
  var re = /^[a-zA-Z0-9]+$/;
  return re.test(username);
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(password);
}

function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var valid = true;

  if (!validateUsername(username)) {
    valid = false;
    alert("El nombre de usuario es inválido.");
  }

  if (!validateEmail(email)) {
    valid = false;
    alert("El correo electrónico es inválido.");
  }

  if (!validatePassword(password)) {
    valid = false;
    alert("La contraseña es inválida.");
  }

  return valid;
}