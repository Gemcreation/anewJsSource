let todayDate = new Date();
console.log(todayDate);
console.log(todayDate.getHours());
console.log(todayDate.getTime());

let myBirth = new Date("August, 2002 07:05:22");
let elapseTime = todayDate - myBirth;
console.log(elapseTime);