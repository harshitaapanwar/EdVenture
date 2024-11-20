document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send login data to server
  fetch('/api/users/index', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.role === 'admin') {
        window.location.href = '/admin'; // Redirect to admin page
      } else {
        window.location.href = '/dashboard'; // Redirect to student dashboard
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
    });
});
