let greeting = "Gem";
console.log(`Hello ${greeting}`);

function reasonCount() {
    return 1;
}
let reasonGive = `Give me ${(reasonCount() == 2) ? "one reason" : "few reason"} I should forgive you`;
console.log(reasonGive);