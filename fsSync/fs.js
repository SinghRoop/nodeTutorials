const fs = require("fs")

// creating a new file
// fs.writeFileSync('read.txt', "Welcome node")

// fs.appendFileSync("read.txt", "   This is the new line")

// Read a file
// const buf_Data = fs.readFileSync("read.txt")
// console.log(buf_Data)

// node has new data type called Buffer
// Buffer is mainly used to store binary data
// While reading from a file

{/* <Buffer 57 65 6c 63 6f 6d 65 20 6e 6f 64 65 54 68 69 73 20 69 73 20 74 68 65 20 6e 65 77 20 6c 69 6e 65 20 20 20 54 68 69 73 20 69 73 20 74 68 65 20 6e 65 77 ... 5 more bytes> */ }

// read_data = buf_Data.toString()
// console.log(read_data)

//to rename a file

fs.renameSync('read.txt', 'readwrite.txt')