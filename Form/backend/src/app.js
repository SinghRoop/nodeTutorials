const express = require('express')
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8000
require('./db/conn')

const app = express()

// const staticUrl = path.join(__dirname, "../public/index.html")
const templateUrl = path.join(__dirname, "../templates/views")
const partialsUrl = path.join(__dirname, "../templates/partials")

// app.use(express.static(staticUrl))
app.set("view engine", "hbs")
app.set("views", templateUrl)
hbs.registerPartials(partialsUrl)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`server is listening at port number ${port}`);
})