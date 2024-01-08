const _ = require("lodash");

const items = [1, [2, [3, [4]]]]; //array of arrays
const newitems = _.flattenDeep(items); //use lodash to flatten array of arrays
console.log(newitems);
