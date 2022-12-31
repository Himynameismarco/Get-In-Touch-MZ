const originalPW = document.getElementById("password");
const confirmPW = document.getElementById("password-confirm");
console.log("originalPW: " + originalPW);

confirmPW.addEventListener('input', (event) => {
  var originalPwContent = originalPW.value;
  var confirmPwContent = confirmPW.value;
  console.log("originalPwContent: " + originalPwContent);
  if (!(confirmPwContent === originalPwContent)) {
    confirmPW.className = "invalid";
  } else {
    confirmPW.className = "valid";
  }

})

