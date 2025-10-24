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