document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value; // Get selected role

  // Send the data to the server (using fetch or any HTTP client)
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role // Include the role in the request body
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Login successful:", data);
  })
  .catch(error => {
    console.error("Login error:", error);
  });
});

