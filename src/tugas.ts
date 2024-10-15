let nilaisiswa: number []=[85, 92 , 67, 58, 75];

function tentukanGrade(nilai:number):string{

    if (nilai >=90){
        return "A";
    } else if (nilai >= 75){
        return "B";
    } else if (nilai >= 60){
        return "C";
    } else{
        return "D";
    }
}

console.log("===========");
nilaisiswa.forEach((nilai)=>{
    console.log(`Nilai ${nilai} Mendapatkan grade ${tentukanGrade(nilai)}.`);
    
});
