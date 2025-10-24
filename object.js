let myCar = {
    brand: "BMW",
    model: "724556",
    year: 2022,
    getPrice: function () {
        return 45000;
    },
    getDescription: function () {
        console.log(this.brand + " of " + this.year + " " + this.model + " model " + " cost: " + this.getPrice());
    }
}
myCar.getDescription();

// other methid we can use to access the element in object apart from the period i.e the . "dot"
// the use of the square baraket [] and the element name will be in a string, as seen below
console.log(myCar["year"]);
// the use of the square baraket and the numeric position of the element inside the object, as below
console.log(myCar[3]);