const path = require("path")
const express = require("express")

const router = express.Router()

router.post("/page02", (req,res) => {
    res.send(`<h1> Welcome to Page2 (berbicara dengan nada dering) </h1>
            <p>Hello there ${req.body.email} !</p>`)
})

router.get("/page01", (req,res) => {
    res.sendFile(path.join(__dirname, "../pages", "login.html"))
})

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../pages", "index.html"))
})

module.exports = router