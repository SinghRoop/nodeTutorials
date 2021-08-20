const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.write("<h1> Welcome to the home page</h1>")
    res.write("<h1> Welcome to the 2nd home page</h1>")
    res.send()
})
app.get('/about', (req, res) => {
    res.send("Welcome to the about page")
})
app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to the contact page")
})
app.get('/temp', (req, res) => {
    res.send([{
        id: 1,
        name: 'roop'
    }, {
        id: 2,
        name: 'roop'
    }])
})

app.listen(8000, () => {
    console.log('Port 8000');
})