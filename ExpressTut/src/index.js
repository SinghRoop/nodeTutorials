const express = require('express')
const app = express()
const path = require('path')

// absolute path
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public")

//built in middleware
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send("Hello from the express.js")
})

app.get('/about', (req, res) => {
    res.send("Hello from the express.js in about")
})

app.listen(8000, () => {
    console.log('listing at port 8000');
})