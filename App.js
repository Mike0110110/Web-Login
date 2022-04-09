var form = document.querySelector("#myForm");
var form2 = document.querySelector("#myForm2");
var errorBox = document.getElementById("error_message");
var errorRed = "rgba(229, 58, 64,1)";
var successGreen = "#5cab7d";
var text;

var inputName = document.querySelector(".User-input-name");
var inputLastName = document.querySelector(".User-input-lastname");
var inputEmail = document.querySelector(".User-input-email");
var inputUserID = document.querySelector(".User-input-UserID");
var inputCountry = document.querySelector(".User-input-Country");
var inputState = document.querySelector(".User-input-state");
var inputCity = document.querySelector(".User-input-city");
var inputPhoneNum = document.querySelector(".User-input-phoneNum");
var inputRefCode = document.querySelector(".User-input-refCode");

var Name = document.querySelector(".label-firstName-js");
var valLastName = document.querySelector(".label-lastName-js");
var valEmail = document.querySelector(".label-Email-js");
var valUserID = document.querySelector(".label-userID-js");
var valCountry = document.querySelector(".label-country-js");
var valState = document.querySelector(".label-state-js");
var valCity = document.querySelector(".label-city-js");
var valPhoneNum = document.querySelector(".label-phoneNum-js");
var valReferenceCode = document.querySelector(".label-referenceCode-js");

var SuccessBox = document.getElementById("Success_message");
var Success_message = document.getElementById("Success-js");
var errorMessage = document.getElementById("error-js");
var wrapperPad =document.querySelector('.wrapper');

function validationError() {
  if (Name.value.length < 2 || !isNaN(Name.value)) {    
    text = "Please Enter a Valid Name";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  } else if (valLastName.value.length < 4 || !isNaN(valLastName.value)) {
    text = "Please Enter a Valid Last Name";
    errorMessage.innerHTML = text;
    errorBox.style.display = "block";
    return false;
  } else if (valEmail.value.indexOf("@") == -1 || valEmail.value.length < 6) {
    errorBox.style.display = "block";
    text = "Please Enter a Valid Email";
    errorMessage.innerHTML = text;
    return false;
  } else if (valUserID.value.length < 4 || !isNaN(valUserID.value)) {
    errorBox.style.display = "block";
    text = "Please Enter a Valid UserID";
    errorMessage.innerHTML = text;
    return false;
  }else  if (valCountry.value == "false") {    
    valCountry.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a Country";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  }else if (valState.value == "false") {    
    valState.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a State";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  } else   if (valCity.value == "false") {    
    valCity.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a City";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  }else if (isNaN(valPhoneNum.value) || valPhoneNum.value.length != 10) {
    errorBox.style.display = "block";
    text = "Please Enter a Valid Number";
    errorMessage.innerHTML = text;
    return false;
  } else if (
    valReferenceCode.value.length < 4 ||
    !isNaN(valReferenceCode.value)
  ) {
    errorBox.style.display = "block";
    text = "Please Enter a Valid Reference Code";
    errorMessage.innerHTML = text;
    return false;
  } else {    
    SuccessBox.style.display = "block";
    Success_message.innerHTML = "Submitted Successfully!";
    return true;
  }
}
Name.addEventListener(
  "focusout",
  () => {
    if (Name.value.length < 2 || !isNaN(Name.value)) {
      Name.style.borderBottom = `1px solid ${errorRed}`;
      errorBox.style.display = "block";
      text = "Please Enter a Valid Name";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputName.innerHTML = Name.value;
      Name.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

valLastName.addEventListener(
  "focusout",
  () => {
    if (valLastName.value.length < 4 || !isNaN(valLastName.value)) {
      valLastName.style.borderBottom = `1px solid ${errorRed}`;
      text = "Please Enter a Valid Last Name";
      errorBox.style.display = "block";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputLastName.innerHTML = valLastName.value;
      valLastName.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

valEmail.addEventListener(
  "focusout",
  () => {
    if (valEmail.value.indexOf("@") == -1 || valEmail.value.length < 6) {
      valEmail.style.borderBottom = `1px solid ${errorRed}`;
      text = "Please Enter a Valid Email";
      errorBox.style.display = "block";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputEmail.innerHTML = valEmail.value;
      valEmail.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

valUserID.addEventListener(
  "focusout",
  () => {
    if (valUserID.value.length < 4 || !isNaN(valUserID.value)) {
      valUserID.style.borderBottom = `1px solid ${errorRed}`;
      text = "Please Enter a Valid UserID";
      errorBox.style.display = "block";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputUserID.innerHTML = valUserID.value;
      valUserID.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

valCountry.addEventListener(
  "focusout",
  () => {
  if (valCountry.value == "false" ||valCountry.value == "" ) {    
    valCountry.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a Country";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  } else {
    inputCountry.innerHTML = valCountry.value;
    valCountry.style.borderBottom = `1px solid ${successGreen}`;
    return true;
  }
},
true
);

valCity.addEventListener(
  "focusout",
  () => {
  if (valCity.value == "false") {    
    valCity.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a City";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  } else {
    inputCity.innerHTML = valCity.value;
    valCity.style.borderBottom = `1px solid ${successGreen}`;
    return true;
  }
},
true
);

valState.addEventListener(
  "focusout",
  () => {
  if (valState.value == "false") {    
    valState.style.borderBottom = `1px solid ${errorRed}`;
    text = "Please Select a State";
    errorBox.style.display = "block";
    errorMessage.innerHTML = text;
    return false;
  } else {
    inputState.innerHTML = valState.value;
    valState.style.borderBottom = `1px solid ${successGreen}`;
    return true;
  }
},
true
);

valPhoneNum.addEventListener(
  "focusout",
  () => {
    if (isNaN(valPhoneNum.value) || valPhoneNum.value.length != 10) {
      valPhoneNum.style.borderBottom = `1px solid ${errorRed}`;
      text = "Please Enter a Valid Number";
      errorBox.style.display = "block";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputPhoneNum.innerHTML = valPhoneNum.value;
      valPhoneNum.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

valReferenceCode.addEventListener(
  "focusout",
  () => {
    if (valReferenceCode.value.length < 4 || !isNaN(valReferenceCode.value)) {
      valReferenceCode.style.borderBottom = `1px solid ${errorRed}`;
      text = "Please Enter a Valid Reference Code";
      errorBox.style.display = "block";
      errorMessage.innerHTML = text;
      return false;
    } else {
      inputRefCode.innerHTML = valReferenceCode.value;
      valReferenceCode.style.borderBottom = `1px solid ${successGreen}`;
      return true;
    }
  },
  true
);

function closeError() {
  let errorBox = document.getElementById("error_message");
  errorBox.style.display = "none";
}
function closeSuccess() {
  let SuccessBox = document.getElementById("Success_message");
  SuccessBox.style.display = "none";
  form.style.display = "none";
  form2.style.display = "block";
  wrapperPad.style.padding ="2em 3em";
}
function resetFields() {
  let normalBorder = "rgba(0, 0, 0, 0.45)";

  Name.value = "";
  valLastName.value = "";
  valEmail.value = "";
  valUserID.value = "";

  valCountry.value = "false";
  valCity.value = "false";
  valState.value = "false";

  valPhoneNum.value = "";
  valReferenceCode.value = "";

Name.style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-lastName-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-Email-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-userID-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-country-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-state-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-city-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-phoneNum-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
  document.querySelector(
    ".label-referenceCode-js"
  ).style.borderBottom = `1px solid ${normalBorder}`;
}

function returnMainPage() {
  resetFields();
  form2.style.display = "none";
  form.style.display = "block";
  wrapperPad.style.padding ="3em";
}
