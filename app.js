// Local dependency - use it only in their particular project (Most common)
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
