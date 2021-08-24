const mongoose = require('mongoose')
const validator = require("validator")

// Define Schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: [true, "Email already exist"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type: Number,
        min:10,
        // max:10,
        unique: true
    },
    address:{
        type: String,
        required: true
    }
})


// Define Models or create a collection

const Student = new mongoose.model("Student", studentSchema )

module.exports = Student;
