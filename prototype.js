let originalCar = {
    make: "bmw",
    model: "2344",
    year: 2025
}
let anotherCar = Object.create(originalCar);
console.log(anotherCar.make);
console.log(anotherCar.model);
console.log(anotherCar.year);
console.log(anotherCar.make = "Jeep");

anotherCar.make = "Ford";
console.log(anotherCar.make);