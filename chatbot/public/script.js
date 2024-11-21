document.getElementById('sendBtn').addEventListener('click', function() {
    const userMessage = document.getElementById('textbox').value.trim();

    if (userMessage === "") {
        alert("Please enter a message");
        return;
    }

    displayMessage(userMessage, 'user');  // Display user's message
    document.getElementById('textbox').value = "";  // Clear the input field

    // Fetch the chatbot response
    fetch('/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => displayMessage(data.response, 'bot'))
    .catch(error => console.error('Error:', error));
});

// Function to display messages in the chat container
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.innerHTML = sender === 'user' ? `You: ${message}` : `Bot: ${message}`;
    document.getElementById('chatContainer').appendChild(messageDiv);
    document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight;
}
