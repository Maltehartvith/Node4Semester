const express = require("express");
const app = express();

app.use(express.static('public'));

const fs = require("fs");
const { Server } = require("http");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const ssrpage = fs.readFileSync("./public/pages/ssrpage/ssrpage.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
const looppage = fs.readFileSync("./public/pages/looppage/looppage.html").toString();
const nodepage = fs.readFileSync("./public/pages/nodejspage/nodepage.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const nodemonpage = fs.readFileSync("./public/pages/nodemonpage/nodemonpage.html").toString();
const packagepage = fs.readFileSync("./public/pages/packagepage/packagepage.html").toString();
const restapipage = fs.readFileSync("./public/pages/restapipage/restapipage.html").toString();
const callbackpage = fs.readFileSync("./public/pages/callbackpage/callbackpage.html").toString();
const puredatapage = fs.readFileSync("./public/pages/puredatapage/puredatapage.html").toString();
const variablepage = fs.readFileSync("./public/pages/variablepage/variablepage.html").toString();
const cleancodepage = fs.readFileSync("./public/pages/cleancodepage/cleancodepage.html").toString();
const importingpage = fs.readFileSync("./public/pages/importingpage/importingpage.html").toString();
const bodyparsingPage = fs.readFileSync("./public/pages/bodyparsingpage/bodyparsingpage.html").toString();
const sendingdatapage = fs.readFileSync("./public/pages/sendingdatapage/sendingdatapage.html").toString();
const statticassetspage = fs.readFileSync("./public/pages/statticassetspage/statticassetspage.html").toString();




const ssrpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "SSR page") + ssrpage + footer.replace("%$CR1PT", "");
const looppageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Loop page") + looppage + footer.replace("%$CR1PT", "");
const nodepageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Node page") + nodepage + footer.replace("%$CR1PT", "");
const frontpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Front page") + frontpage + footer.replace("%$CR1PT", "");
const nodemonpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Nodemon page") + nodemonpage + footer.replace("%$CR1PT", "");
const restapipageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "REST API page") + restapipage + footer.replace("%$CR1PT", "");
const variablepageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Variable page") + variablepage + footer.replace("%$CR1PT", "");
const callbackpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Callback page") + callbackpage + footer.replace("%$CR1PT", "");
const puredatapageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Pure Data page") + puredatapage + footer.replace("%$CR1PT", "");
const packagepageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Package.json page") + packagepage + footer.replace("%$CR1PT", "");
const cleancodepageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Clean Code page") + cleancodepage + footer.replace("%$CR1PT", "");
const bodyparsingPageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Body Parsing page") + bodyparsingPage + footer.replace("%$CR1PT", "");
const sendingdatapageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Sending Data page") + sendingdatapage + footer.replace("%$CR1PT", "");
const importingpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Importing in Node page") + importingpage + footer.replace("%$CR1PT", "");
const statticassetspageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Stattic Assets Page") + statticassetspage + footer.replace("%$CR1PT", "");

app.get("/", (req, res) => {
    res.send(frontpageConCat);
});

app.get("/ssr", (req, res) => {
    res.send(ssrpageConCat);
});

app.get("/loop", (req, res) => {
    res.send(looppageConCat);
});

app.get("/node", (req, res) => {
    res.send(nodepageConCat);
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonpageConCat);
});

app.get("/restapi", (req, res) => {
    res.send(restapipageConCat);
});

app.get("/variable", (req, res) => {
    res.send(variablepageConCat);
});

app.get("/callback", (req, res) => {
    res.send(callbackpageConCat);
});

app.get("/puredata", (req, res) => {
    res.send(puredatapageConCat);
});

app.get("/package", (req, res) => {
    res.send(packagepageConCat);
});

app.get("/cleancode", (req, res) => {
    res.send(cleancodepageConCat);
});

app.get("/bodyparsing", (req, res) => {
    res.send(bodyparsingPageConCat);
});

app.get("/sendingdata", (req, res) => {
    res.send(sendingdatapageConCat);
});

app.get("/importing", (req, res) => {
    res.send(importingpageConCat);
});

app.get("/statticassets", (req, res) => {
    res.send(statticassetspageConCat);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log("Server is running on:", PORT);
});