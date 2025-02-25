const socket = io(); // Conectar al servidor WebSocket
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit("chat message", message); // Enviar mensaje al servidor
        messageInput.value = "";
    }
});

// Escuchar mensajes del servidor
socket.on("chat message", (msg) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
