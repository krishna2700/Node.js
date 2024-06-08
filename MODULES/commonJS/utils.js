// * ways of exporting modules in csjs

// ! Single function export
// ! Object Export
// ! Named function export
// ! using export shortLand

// ? Single function export

const firstName = "Krishna";

const greet = (name) => {
  return `Hello ${name}`;
};

module.exports = firstName;
module.exports = greet;

//   ? Object export

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

module.exports = {
  //   add: function (a, b) {
  //     return a + b;
  //   },
  //   subtract: function (a, b) {
  //     return a - b;
  //   },
  //   mySubtct: subtract,
  //   myAdd: add,
  subtract,
  add,
};

// ? Named function export

// module.exports.sayHi = (name) => {
//   return `Hello ${name}`;
// };
// module.exports.goodBye = (name) => {
//   return `goodBye ${name}`;
// };

// ? using export shortLand

exports.sayHi = (name) => {
  return `Hello ${name}`;
};

exports.goodBye = (name) => {
  return `goodBye ${name}`;
};
