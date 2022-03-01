const { coolDinosaurs } = require("./dinosaurs.json");

console.log(coolDinosaurs)

function amountOfCoolDinosaurs() {
    return coolDinosaurs.length;
}

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}