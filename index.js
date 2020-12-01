var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("home__right").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "86px";
    document.getElementById("home__right").style.marginLeft = "86px";
    this.mini = true;
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    console.log("you have entered valid email !");
    document.form.email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form.email.focus();
    return false;
  }
}

function ValidateFullName(inputText) {
  var fullName = /^[A-Z]([A-Z]|[a-z]|[0-9]){5,24}$/;
  if (inputText.value.match(fullName)) {
    alert("Your name is in correct format");
    document.form1.fullname.focus();
    return true;
  } else {
    alert("your name must start with a capital letter");
    document.form1.fullname.focus();
    return false;
  }
}

function ValidateLoginEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    console.log("you have entered valid email !");
    document.form.login.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form.login.focus();
    return false;
  }
}

function checkPassword(inputText) {
  var checkpass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (inputText.value.match(checkpass)) {
    console.log("your password is in correct form");
    document.form.Password.focus();
    return true;
  } else {
    alert(
      "Your password must contain 8 character , first letter should be capital ,must contain one number and one special character !"
    );
    document.form.Password.focus();
    return false;
  }
}
