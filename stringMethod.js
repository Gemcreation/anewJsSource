let myFood = "I love, eating yam and egg";
let myText = "Knowledge is power, but consistency is the key";
let myGame = "Ball is not my thing";

console.log(myGame.toUpperCase());

let mySplit = myFood.split(",");
console.log(mySplit);

let myEndsWith = myGame.endsWith("thing");
console.log(myEndsWith);

let myStartWith = myGame.endsWith("ball");
console.log(myStartWith);

let myInclude = myText.includes("Know");
console.log(myInclude);

let myTrim = " thing  ";
console.log(myTrim.length);
console.log(myTrim.trim().length);