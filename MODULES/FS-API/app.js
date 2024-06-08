const fs = require("fs");

// ! Read a file

// * Asynchronous
// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// * Synchronous
// const data = fs.readFileSync("sample.txt");
// const dataBuffer = data.toString();
// console.log(dataBuffer);

// ! Write a file

// fs.writeFile("./new.txt", "jai swaminarayan das na das", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

// ! Append a file

// fs.appendFile("./new.txt", "jai swaminarayan", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

// !  check if file exists

// fs.access("./new.txt", fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file exists");
//   }
// });

// ! Delete a file

// fs.unlink("./new.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted");
//   }
// });

// ! Create a directory

// fs.mkdir("./folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });

// ! Delete a directory

// fs.rmdir("./folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder deleted");
//   }
// });

// ! create a file

// fs.writeFile("./new.txt", "jai swaminarayan das na das", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

// ! using promise
const fs2 = require("fs/promises");

// try {
//   const data = fs2.readFile("sample.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

const readFileContent = async () => {
  try {
    const data = await fs2.readFile("sample.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFileContent();
