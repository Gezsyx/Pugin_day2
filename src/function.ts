// npx tsc && node dist/function.js (run code)


// Function Declaration

function sapa(nama : string, umur : number){
    console.log("Halo, aku " + nama + " umurku " + umur);
    
}
sapa("Mulyono", 20)

// Anonymous function

const pickers = function (name : string, role : string){
    return name + role
}
let pick =  pickers("Estes ", "Jungler")
console.log("Saya ingin pergi ke jungler menggunakan " + pick);


// Array Function

let multiplication = (a : number, b : number) => {
    return a / b + a
}
let result = multiplication(8,2)
console.log(result);
