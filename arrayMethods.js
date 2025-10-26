let names = ["Gem", "Kola", "Ayo", "Sola"];
let others = ["Sammy", "Cary", "Kunle", "Fola"];
let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 23, 34, 35];

let combine = fibonacci.concat(lost);
console.log(combine);
console.log(combine.join("-"));

let filtered = combine.filter( (x) => {
    if(x <= 10);
    return x;
});
console.log(filtered);