const express = require("express");
const app = express();

app.use(express.static('public'));

const page = require("./public/pagebuilder/pagebuilder.js")

app.get("/", (req, res) => {
    res.send(page.frontpageConCat);
});

app.get("/ssr", (req, res) => {
    res.send(page.ssrpageConCat);
});

app.get("/loop", (req, res) => {
    res.send(page.looppageConCat);
});

app.get("/node", (req, res) => {
    res.send(page.nodepageConCat);
});

app.get("/nodemon", (req, res) => {
    res.send(page.nodemonpageConCat);
});

app.get("/restapi", (req, res) => {
    res.send(page.restapipageConCat);
});

app.get("/variable", (req, res) => {
    res.send(page.variablepageConCat);
});

app.get("/callback", (req, res) => {
    res.send(page.callbackpageConCat);
});

app.get("/package", (req, res) => {
    res.send(page.packagepageConCat);
});

app.get("/cleancode", (req, res) => {
    res.send(page.cleancodepageConCat);
});

app.get("/bodyparsing", (req, res) => {
    res.send(page.bodyparsingPageConCat);
});

app.get("/sendingdata", (req, res) => {
    res.send(page.sendingdatapageConCat);
});

app.get("/importing", (req, res) => {
    res.send(page.importingpageConCat);
});

app.get("/statticassets", (req, res) => {
    res.send(page.statticassetspageConCat);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log("Server is running on:", PORT);
});