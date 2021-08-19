const fs = require('fs')

// create
// fs.writeFile('read.txt', "Async method in node", (err) =>{
//  console.log("files is created")
//  console.log(err)
// })

// update
// fs.appendFile('read.txt', "  text at end", (err) => {
//     console.log('data added');
// })

// read
fs.readFile('read.txt', 'utf8', (err, data) => {
    console.log('The data is: ', data);
    console.log('Any error occured', err);
})
console.log('After the data');

// rename
// fs.rename('read.txt', 'readata.txt', (err) =>{
//     console.log('rename done');
// })

// delete
// fs.unlink('readata', (err) =>{
//     console.log('files deleted');
// })