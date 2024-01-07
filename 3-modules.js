//Modules
//Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.
//The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.
//In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope.
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const sayHi = require("./4-sayHiModule");
const name = require("./4-namesModule");
const data = require("./4-exportAsYouGo");
console.log(data.namesList, data.personObject);
console.log("Person number 2 " + data.namesList[2]);
sayHi(name.boss);
sayHi("Howard");
sayHi(name.client);

//video 43 minutes in
