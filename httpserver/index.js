
const http = require("http")

const server = http.createServer((req, res) =>{
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort
    res.end(`Your IP address is ${ip} and your port is ${port}`)
    // res.end('hello from server')
})

server.listen(8000, ()=>{
 console.log('listenning on port 8000');   
})