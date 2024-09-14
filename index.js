 let form = document.getElementById("registrationForm");

function registrationForm() {
  let Name = document.getElementById('name').value;
  let Contact = document.getElementById('number').value;
  let Email = document.getElementById('email').value;
  let Password = document.getElementById('password').value;
  let Confirm_Password = document.getElementById('C-pass').value;
  let dOB = document.getElementById('date').value;
  let address = document.getElementById('address').value;
  let location = document.getElementById("select").value;  
   let department = document.getElementById("department"); // Department select
  
  let errorMsg = "";  // For storing error messages
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (Name === "" || Contact === "" || Email === "" || Password === "" || Confirm_Password === "" || dOB === "" || address === "") {
    errorMsg = "All fields are mandatory to fill.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }

  else if (Contact.length !== 11) {
    errorMsg = "Contact number should be exactly 11 digits.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }
  else if (!emailPattern.test(Email)) {
    errorMsg = "Please enter a valid email address.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }
  else if (!passwordPattern.test(Password)) {
    errorMsg = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 8 characters long.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }
  else if (Password !== Confirm_Password) {
    errorMsg = "Passwords do not match.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }
  else if (location === "Select your Country") {
    errorMsg = "Please select a country.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }

  else if (department === "Select your Department") {
    errorMsg = "Please select a department.";
    document.getElementById('error-msg').innerHTML = errorMsg;
    return false;
  }
else{
  document.getElementById('error-msg').innerHTML = ""; // Clear any previous errors
  return true;
}
 
};
console.log(registrationForm());

document.getElementById('showPassword').addEventListener('change', function() {
  let passwordField = document.getElementById('password');
  if (this.checked) {
      passwordField.type = 'text';
  } else {
      passwordField.type = 'password';
  }
});

document.getElementById('showConfirmPassword').addEventListener('change', function() {
  let confirmPasswordField = document.getElementById('C-pass');
  if (this.checked) {
      confirmPasswordField.type = 'text';
  } else {
      confirmPasswordField.type = 'password';
  }
});
