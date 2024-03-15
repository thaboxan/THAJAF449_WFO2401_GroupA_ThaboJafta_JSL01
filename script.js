function validateSyntax() {
  let input = document.getElementById("petInput").value;
  const regex = /^pet_\d{4}[^\d_]+$/; // RegEx to validate the input

  // Validation logic using ternary operator
  const result = regex.test(input) ? "Valid Syntax" : "Invalid Syntax";

  document.getElementById("result").innerText = result;
}
