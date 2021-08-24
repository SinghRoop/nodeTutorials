const express = require('express')
require("./db/conn")
const port = process.env.PORT || 8000

const app = express()
const studentRouter = require("./routers/student")

// express.json convert incoming files from json to object 
app.use(express.json())
app.use(studentRouter)


app.listen(port, () => {
    console.log(`server is listening at port number ${port}`);
})