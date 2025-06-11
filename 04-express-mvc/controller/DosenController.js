const Dosen = require("../model/Dosen")

const index = (req, res) => {
    const dosen = new Dosen();  
    res.render('dosen/index', {
        dataDosen: dosen.all()
    })
}

const create = (req, res) => {
    res.render('dosen/create')
}

const store = (req, res) => {
    const dosen = new Dosen()
    dosen.save({
        nik: req.body.nik,
        name: req.body.name,
        email: req.body.email,
        birth_date: req.body.birth_date
    })
    res.redirect("/lecturer")
}

module.exports = {index, create, store}
