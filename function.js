function sayHello() {
    console.log("Hello World!");
}

sayHello();

function sayGreetings(name) {
    console.log("==================");
    console.log("Good morning " + name + "!");
    console.log("==================");
}

sayGreetings("Gem");
sayGreetings("Ibrahim");
sayGreetings("Kolwole");

// return keyword function to return something in a function
function calculateTax(amount) {
    let result = amount * 0.0825;
    
    return result;
}

let tax = calculateTax(100);
console.log(tax);