let hello = 0;
function sayHello() {
    setTimeout( function () {
        console.log("Hello World! " + hello++);
        sayHello();
    }, 2000);
}

sayHello();


// below is what we called IIFE immediately invoke function expression
(function () {
    console.log('I\'m here');
}) ();