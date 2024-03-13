function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = "";
  const regex = /^pet_[a-zA-Z0-9]+$/; // RegEx to validate the input

  // Validation logic
  if (regex.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}
