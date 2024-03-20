document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Here you can perform further validation before sending data to the server
  // For simplicity, we're just displaying a message here
  
  document.getElementById("message").textContent = "Account created successfully!";
});
