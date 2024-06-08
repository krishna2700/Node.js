// * defauls export
//  * Name export
// * Mixed export (Default + Named)
// * Export everything

// ? defauls export

// export default function (name) {
//   return `Hello ${name}`;
// }

// ? Name export

// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }

// ? Mixed export (Default + Named)

export default function (name) {
  return `Hello ${name}`;
}
export function addNumber(a, b) {
  return a + b;
}

// ? Export everything

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
