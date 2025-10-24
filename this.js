/* let myObject = {value: "My Object"};

global.value = "Global Object";

function third(name) {
    return this.value + " " + name;
}

console.log(third("Gem"));
console.log(third.call(myObject, "Kola"));
console.log(third.apply(myObject, ["Shola"])); */

function details() {
    console.log(this.firstName + " " + this.lastName);
}

let customer1 = {
    firstName: "Gem",
    lastName: "Creation",
    print: details,
}
let customer2 = {
    firstName: "Kola",
    lastName: "hanif",
    print: details,
}

customer1.print();
customer2.print();