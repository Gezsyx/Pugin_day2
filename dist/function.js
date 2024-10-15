"use strict";
// npx tsc && node dist/function.js (run code)
// Function Declaration
function sapa(nama, umur) {
    console.log("Halo, aku " + nama + " umurku " + umur);
}
sapa("Mulyono", 20);
// Anonymous function
const pickers = function (name, role) {
    return name + role;
};
let pick = pickers("Estes ", "Jungler");
console.log("Saya ingin pergi ke jungler menggunakan " + pick);
// Array Function
let multiplication = (a, b) => {
    return a / b + a;
};
let result = multiplication(8, 2);
console.log(result);
