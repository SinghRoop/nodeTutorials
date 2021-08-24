const express = require('express')
const router = new express.Router()
const Student = require("../models/students")


// Create a new student  using promise()

// router.post("/student", (req, res) => {
//     //req.body is used to fetch data from request
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

// Create a new student  using async await()

router.post("/student", async (req, res) => {

    try {
        // console.log(req.body);
        const user = new Student(req.body)

        const newUser = await user.save()
        res.status(201).send(newUser)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// Read the data of registered student

router.get("/student", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData)
    }
    catch (err) {
        res.send(err)
    }
})

// Get or Read Individual Student data using ID

router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        console.log(req.params.id);
        const studentData = await Student.findById(_id)
        console.log(studentData);
        if (!studentData) {
            res.status(404).send()
        }
        else {
            res.send(studentData)
        }
        res.send(studentData)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

// Delete Individual Student data using ID

router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const delStudent = await Student.findByIdAndDelete(_id)
        console.log(delStudent);
        if (!delStudent) {
            res.status(404).send()
        }
        else {
            res.send(delStudent)
        }
        res.send(delStudent)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

// Update Individual Student data using ID

router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateStudent)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

module.exports = router