// if else
var nilai: number = 69;

if (nilai >=90){
    console.log("Grade SSR");
}else if(nilai >=60){
    console.log("Grade B")
}else{
    console.log("Grade C");
}

// Switch Else

var Pick_Hero: string = "Random"

switch (Pick_Hero){
    case "Ling":
        console.log("Mythic")
        break
    case "Alucard":
        console.log("Epic");
        break
    default:
    console.log("Pensi Aja");
}

// 

const Ipk: number[] = [2, 2, 3, 2, 4];
for (let i = 0; i < Ipk.length; i++){

    if (i == 3)(
        console.log(`nilai indexing ke 3 : ${Ipk[i]} `)       
    )
}