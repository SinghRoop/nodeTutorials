const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/students-api",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify : false
    }
).then(() => {
    console.log("Connection is successful with database");
}).catch((err) => {
    console.log("No connection", err);
})