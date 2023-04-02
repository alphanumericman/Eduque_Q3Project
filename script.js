function showpassword() {
    var pasword = document.getElementById("pass");

    if (pasword.type === "password") {
        pasword.type = "text";
    } else {
        pasword.type = "password";
    }
}
function login() {
    var usernameInt = document.getElementById("user").value;
    var passwordInt = document.getElementById("pass").value;
    var textreturn = document.getElementById("alerth3");
  
    var actualusername = "SirKevin";
    var actualpassword = "CS3Q3Proj";
  
    if (usernameInt == "") {
      if (passwordInt == "") {
        textreturn.innerHTML = "Please input username and password";
      } else {
        textreturn.innerHTML = "Please input username";
      }
      textreturn.style.display = "block";
    } else if (passwordInt == "") {
      textreturn.innerHTML = "Please input password";
      textreturn.style.display = "block";
    } else if (usernameInt == actualusername && passwordInt == actualpassword) {
      textreturn.innerHTML = "Successful Login!";
      textreturn.style.color = "white";
      textreturn.style.display = "block";
      setTimeout(function() {
        window.location.href = "mainwebsite/main.html";
      }, 2000);
    } else {
      textreturn.innerHTML = "Incorrect Username or Password";
      textreturn.style.display = "block";
    }
}