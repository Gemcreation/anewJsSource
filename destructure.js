let a, b, c, d, e;
let names = ["Gem", "Kola", "Hanif", "Shola", "Kunle"];
[a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let year, model;
({year, model} = {
    make: "bmw",
    year: 2025,
    price: 5000,
    model: 45783
});
console.log(year);
console.log(model);