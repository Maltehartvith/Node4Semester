import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A client connected", socket.id);

    socket.on("a client changed the color", ({ data }) => {

        //changes the color for ALL OTHER sockets rather than itself
        //socket.broadcast.emit("please change the color", { data })

        //change the color ONLY for this socket
        socket.emit("please change the color", { data })

        //Changes ALL of the sockets in the io namespace
        //io.emit("please change the color", { data })

    });
});


import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"));
});

server.listen(3000);