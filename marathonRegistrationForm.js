const registerButton = document.getElementById('registerButton');
const errorInput = document.getElementById('errorMessage');

function togglePassword() {
  let passwordInput = document.getElementById('password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function validateLettersInput(event) {
  const regex = /^[a-z]+$/i;

  if (event.target.value.match(regex)) {
    registerButton.disabled = false;
    event.target.style.border = '1px solid black';
    errorInput.innerHTML = '';
  } else {
    registerButton.disabled = true;
    event.target.style.border = '3px solid red';
    errorInput.innerHTML = 'Please enter a valid value!';
  }
}

function validateEmail(event) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (event.target.value.match(regex)) {
    registerButton.disabled = false;
    event.target.style.border = '1px solid black';
    errorInput.innerHTML = '';
  } else {
    registerButton.disabled = true;
    event.target.style.border = '3px solid red';
    errorInput.innerHTML = 'Please enter a valid value!';
  }
}

function validatePassword(event) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (event.target.value.match(regex)) {
    registerButton.disabled = false;
    event.target.style.border = '1px solid black';
    errorInput.innerHTML = '';
  } else {
    registerButton.disabled = true;
    event.target.style.border = '3px solid red';
    errorInput.innerHTML = 'Password must contain minimum eight characters, at least one letter and one number!';
  }
}