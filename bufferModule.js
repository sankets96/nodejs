

//creating an empty Buffer of the length 15:


const b = Buffer.alloc(15);  //created empty buffer
console.log("empty buffer ",b);

//write into buffer

b.write('hellow world');
console.log("direct print ",b);
console.log(b.toString());
console.log("length ",b.length);
console.log("extract particular range ",b.toString('utf-8',0,4));

const c = Buffer.from("new created ");
console.log("Concat is ",Buffer.concat([b,c]).toString());

console.log("compare to buffer ",Buffer.compare(b,c));

const d = b.slice(0,4);
console.log("sliced return new string is ",d.toString());



const buf = Buffer.from('Hello, World!');
const base64Str = buf.toString('base64');
console.log(base64Str);  // Outputs: SGVsbG8sIFdvcmxkIQ==

const bufFromBase64 = Buffer.from(base64Str, 'base64');
console.log(bufFromBase64.toString());  // Outputs: Hello, World!
