// * analysing process

console.log(process);

// Enviroment variables

console.log(process.env);

// Accessing the env variables
const appEnv = process.env.APP_ENV || "development";
// Display the ENV
console.log("Our node app is running in " + appEnv);
// setting the env

// ! Process.ext()

// * check the current env using NODE_ENV env variable

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV !== "development") {
//   // Display some error
//   console.log("We are not in development mode");
//   process.exit();
// }

// ? Process.cwd() and process.chdir()

console.log("current working directory", process.cwd());

try {
  // change the current working directory
  process.chdir("/tmp");
  console.log("The new working directory is", process.cwd());
} catch (error) {
  // Log any error that may occur
  console.log("Error changing directory", error);
}
