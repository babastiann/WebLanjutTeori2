const express = require("express")
const dosenController = require("../controller/DosenController")


const router = express.Router()

router.use(express.static('public'))
router.get("/student", (req, res) => {
    res.render('mahasiswa/index')
})

router.get("/lecturer/create", dosenController.create)
router.post("/lecturer/create", dosenController.store)
router.get("/lecturer", dosenController.index)

router.get("/", (req, res) => {
    res.render('starter')
})

module.exports = router