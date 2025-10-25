class Car{
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }
}
let newCar = new Car("Hondard", "4503", 2024);
console.log(newCar);

class SportCar extends Car{
    
}
let mySportCar = new SportCar("J-wagon", 233432, 2023);
console.log(mySportCar);