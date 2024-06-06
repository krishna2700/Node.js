// * Accessing the Global Objects

console.log(global);

// * Accessing global object
global.myGlobal = "Hello from the global object";

console.log(global.myGlobal);

// To chek if our variable is truly global

console.log("myGlobal" in global);
console.log("myGlobalssssssss" in global);

console.log(__dirname);

console.log(__filename);

// ? using 'setInterval' and 'clearInterval'

let count = 0;

const interval = setInterval(() => {
  console.log("Jai Swaminarayan");
  count++;
  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);

// * setTimeOut

setTimeout(() => {
  console.log("Das na Das");
}, 2000);
