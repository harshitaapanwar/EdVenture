const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');

// Predefined chatbot messages
const arrayOfPossibleMessages = [
    { message: "hi", response: "Hello! How can I help you today?" },
    { message: "bye", response: "Goodbye! Have a great day!" },
    { message: "what is your name", response: "I am your friendly chatbot!" },
    { message: "how old are you", response: "I don't have an age, but I was created recently to assist you!" },
    { message: "who made you", response: "I was created by developers to help with tasks and provide answers!" },
    { message: "thank you", response: "You're welcome! Let me know if you need anything else." },
    { message: "good morning", response: "Good morning! Hope you have a wonderful day ahead." },
    { message: "good night", response: "Good night! Sleep tight and have sweet dreams." },
    { message: "help", response: "How can I assist you? You can ask me about anything or just chat." }
];

// Display user and bot messages
function displayMessage(content, isUser = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('p-2', 'rounded', 'mb-2', isUser ? 'text-end' : 'text-start');
    messageElement.style.backgroundColor = isUser ? '#007bff' : '#e9ecef';
    messageElement.style.color = isUser ? '#fff' : '#000';
    messageElement.textContent = content;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle chatbot response
function chatboxResponse(userMessage) {
    const normalizedMessage = userMessage.trim().toLowerCase();
    const response = arrayOfPossibleMessages.find(msg => msg.message === normalizedMessage)?.response || "Sorry, I didn't understand that.";
    displayMessage(`Chatbot: ${response}`, false);
}

// Event listeners
sendBtn.addEventListener('click', () => {
    const userMessage = textbox.value.trim();
    if (userMessage) {
        displayMessage(`You: ${userMessage}`);
        chatboxResponse(userMessage);
        textbox.value = '';
    }
});

textbox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
