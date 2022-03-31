import express from "express";
const app = express();

//import cors from "cors"
//app.use(cors());

app.use(express.json());

import path from "path"
app.use(express.static(path.resolve("../client/public"))) //creates a connection between the client and the server and resolve the cors error

import playersRouter from "./router/playersRouter.js"
app.use(playersRouter);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log("App is running on", PORT)
});