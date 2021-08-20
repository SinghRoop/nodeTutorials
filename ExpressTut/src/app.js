const express = require('express')
const app = express()
const port = 8000
const path = require('path')

// const basePath = path.join(__dirname, "../public")

// set the view engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../template'));

//template engine route
app.get("/", (req, res) => {
    res.render("index", { name: 'Singh' });
})

// built in middleware
// app.use(express.static(basePath))

// app.get("/about", (req, res) => {
//     res.render("hello")
// })

app.get("/", (req, res) => {
    res.send("hello from express server")
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})