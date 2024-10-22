//first app
//core module file system
const fs = require('fs');

console.log(fs.writeFileSync("fst.txt","this is first app creatde in node js"));


// //append data to file
fs.appendFileSync("fst.txt","this is appended text in node js")


//read data from txt
const data = fs.readFileSync("fst.txt");  //read into byte stream
console.log(data.toString());


//rename the file
fs.renameSync("fst.txt","fstread.txt");


//create folder
// fs.mkdirSync("sanket");

//read data from file wiothout tostring  method
let a = fs.readFileSync("fstread.txt","utf8");
console.log(`this is dat printed by utf8 ${a}`);


//asyncronus writing
const content = 'This is some text to write into the file';
fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully');
  }
});


//asyncronus reading
fs.readFile('example.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return
        
    }
    console.log(data);
    

});


//asyncronus delete
fs.unlink('example.txt', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File deleted');
    }
  });
  