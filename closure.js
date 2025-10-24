function sayHello(params) {
    return function() {
        console.log("How are you " + params);
    }
}
let greet = sayHello("Gem");
greet();