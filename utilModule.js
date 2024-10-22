const util = require('util');

console.log(util.format('%s is %d years old.', 'Alice', 25)); 
// Output: Alice is 25 years old.


const fs = require('fs');

const readFile = util.promisify(fs.readFile);

readFile('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
