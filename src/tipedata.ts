// TIPE DATA

// Primitif//

var nama: string = 'Fufufafa'
console.log("nama :", nama);

var umur: number = 32;
console.log("umur :", umur);

var islife: boolean = false;
console.log("hidup :", islife);

let x : null = null;
console.log("nilai_x", x);

// Non Primitif//

// Object

var person: {Nama: string, Match: number,Win_Rate: string}
={Nama: "Alucard", Match:6969, Win_Rate:"89%"}
console.log('Hero Favorit: ', person);


// Array
var numbers: number[] = [1, 2, 3, 4, 5];
console.log("Nomor Urut: ", numbers)

// Tuple
var Top_Global: [string, number] = ['Indonesia', 1]
console.log("Saya", Top_Global)

// Any
var Pick_Rate: any =25;
console.log("Pick Rate", Pick_Rate);
Pick_Rate = ("Pick")
console.log("New Patch Pick Rate", Pick_Rate)

// Union
var id: string | number;
id = 938801;
console.log(id);