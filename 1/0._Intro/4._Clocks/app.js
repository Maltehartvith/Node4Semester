const express = require("express");
const app = express();

app.use(express.static('public'));

const dinosaurrouter = require("./routers/dinorouter.js")
app.use(dinosaurrouter.router)
const { calculateAmountOfCoolDinosaurs } = require("./dino/dinosaurs.js")
console.log(calculateAmountOfCoolDinosaurs())

console.log()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")

});

app.get("/welcome", (req, res) => {
    res.send(`
        <h1>Welcome to my website </h1>
        <h2>This is B A L L S </h2>
    `);
});

/*app.get("/forecast", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});*/

app.get("/dino", (req, res) => {
    res.send({data: calculateAmountOfCoolDinosaurs()})
})


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log("App is running on port", PORT)
});


/*
const server = app.listen(PORT, () => {
    console.log("App is running on port", server.address().port)
});
server.address().port - takes a random port that is available 
*/