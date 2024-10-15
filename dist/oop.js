"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    great() {
        console.log(`Hi, nama saya ${this.name} rumah saya di Kota ${this.address}`);
    }
}
class Employe extends Person {
    constructor(name, address, jobtittle) {
        super(name, address);
        this.jobTittle = jobtittle;
    }
    work() {
        console.log(`AKu ${this.name} bekerja sebagai ${this.jobTittle}`);
    }
}
let employe1 = new Employe(`Rusdi`, "Ngawi", 'Tukang Cukur');
employe1.great();
employe1.work();
