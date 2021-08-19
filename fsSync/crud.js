const fs = require('fs')

//create
// fs.writeFileSync("bio.txt", "This is my first file in node")

//update
// fs.appendFileSync("bio.txt", " and that is the new text added at end of file")

//read
// const readdata = fs.readFileSync('bio.txt', 'utf8');
// console.log(readdata)

//rename
// fs.renameSync('bio.txt', 'mybio.txt')

//delete
fs.unlinkSync('mybio.txt')

//remove directory
fs.rmdirSync('Crud')
