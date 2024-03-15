function validateSyntax() {
  let input = document.getElementById("petInput").value;
  const regex = /^pet_\d{4}[^\d_]+$/; // RegEx to validate the input

  const resultElement = document.getElementById("result");

  // Validation logic using ternary operator
  const isValid = regex.test(input);
  resultElement.textContent = isValid ? "Valid Syntax" : "Invalid Syntax";
  resultElement.classList.remove("valid", "invalid");
  resultElement.classList.add(isValid ? "valid" : "invalid");
}
