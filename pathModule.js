const path = require('path');

console.log(path.basename('/sanket/ff.txt')); // Output: 'file.txt'
console.log(path.dirname('/sanket/ff.txt')); // Output: '/sanket'

console.log(path.extname('/folder/file.txt')); // Output: '.txt'
console.log(path.parse('/folder/file.txt')); // Output: { root: '/', dir: '/folder', base: 'file.txt', ext: '.txt', name: 'file' }

