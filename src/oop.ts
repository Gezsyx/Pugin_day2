// 

class Person {
    name : string
    address : string

    constructor (name: string, address: string){
        this.name = name
        this.address = address
    }

    great (){
        console.log(`Hi, nama saya ${this.name} rumah saya di Kota ${this.address}`);
        
    }
}

class Employe extends Person {
    jobTittle : string

    constructor(name : string, address : string, jobtittle : string){
        super(name,address)
        this.jobTittle = jobtittle
    }

    work(){
        console.log(`AKu ${this.name} bekerja sebagai ${this.jobTittle}`);
        
    }
}

let employe1 = new Employe (`Rusdi`, "Ngawi", 'Tukang Cukur')
employe1.great()
employe1.work()
