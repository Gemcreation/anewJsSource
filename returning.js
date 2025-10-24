function myReturn(radius) {
    let area = 2 * Math.PI * radius;
    return area;
    
}

let calArea = myReturn(5);
console.log("Area: " + parseInt(calArea));

//Checking others
function secReturn() {
    let area = 2 * Math.PI;
    return area;
    
}

let secCalArea = secReturn();
console.log("Area: " + parseInt(secCalArea));

//Checking others square result
function seqReturn() {
    let area = 2 * Math.PI;
    return area;
    
}
console.log("Square: " + Math.pow( parseInt(seqReturn), 3));

//Another test

function myNew() {
    return function () {
        console.log(Math.pow(2, 3));
    }
}
let myMath = myNew();
myMath();

//checks
function mynew() {
    return function () {
        console.log(Math.pow(4, 3));
    }
}
let mymath = mynew();
mymath();
// console.log("Square: " + mymath());