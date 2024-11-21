const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Predefined chatbot responses
const chatbotResponses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! What can I do for you today?",
    "how are you": "I'm doing great, thank you! How about you?",
    "bye": "Goodbye! Have a great day!",
};

// Serve static files from the "public" directory
app.use(express.static('public'));

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle chat messages
    socket.on('chatMessage', (message) => {
        console.log('User message:', message);

        // Respond based on predefined queries
        const response = chatbotResponses[message.toLowerCase()] || "Sorry, I didn't understand that.";
        socket.emit('chatbotResponse', response);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
