const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // fs.readFile('input.txt', 'utf8', (err, data) => {
    //     if (err) return console.log(err);
    //     res.end(data)
    // })

    //2nd way using stream
    // Reading from a stream
    // Create a readable stream
    // Handle stream events -> data, end and error
      
    // read from a stream
    // const readStream = fs.createReadStream('input.txt')
   
    // write from stream
    // readStream.on('data', (chunkData) => {
    //        res.write(chunkData)
    // })
    // readStream.on('end' , () =>{
    //     res.end()
    // })
    // readStream.on('error' , (err)=>{
    //     console.log(err);
    //     res.end('file not found')
    // })

    //2nd way using stram.pipes()

    const readStream = fs.createReadStream('input.txt')
    readStream.pipe(res)

})

server.listen(8000)