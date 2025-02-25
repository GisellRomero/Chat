const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // Servir archivos estáticos desde /public

io.on("connection", (socket) => {
    console.log("Usuario conectado");
    
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg); // Enviar mensaje a todos los clientes
    });
    
    socket.on("disconnect", () => {
        console.log("Usuario desconectado");
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
