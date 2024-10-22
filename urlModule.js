const url = require('url');


//parse

const myURL = url.parse('https://localhost:8080/json?name=John#hash');
console.log(myURL);






console.log(myURL.href);  // Output: 'https://example.com:8080/pathname?name=John#hash'
console.log(myURL.hostname);  // Output: 'example.com'
// console.log(myURL.searchParams.get('name'));  // Output: 'John'
