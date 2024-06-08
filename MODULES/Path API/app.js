const path = require("path");

console.log(path);

// ! path.baseName()

const file = path.basename("./yser/test/sample.txt");
console.log(file);

// ! path.dirname()

const dir = path.dirname("./yser/test/sample.txt");
console.log(dir);

// ! path.extname()

const ext = path.extname("./yser/test/sample.txt");
console.log(ext);

// ! path.join()

const join = path.join("yser", "test", "sample.txt");
console.log(join);

// ! path.resolve

const resolve = path.resolve("yser", "test", "sample.txt");
console.log(resolve);

// ! path.isAbsolute()

const isAbsolute = path.isAbsolute("Node.js/MODULES/Path API/sample.txt");
console.log(isAbsolute);

//  ! path.parse()

const parse = path.parse("Node.js/MODULES/Path API/sample.txt");
console.log(parse);
console.log(parse.dir);
console.log(parse.base);
console.log(parse.ext);
