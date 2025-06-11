const Dosen = require("../model/Dosen");

const index = (req, res) => {
    const dosen = new Dosen();  
    dosen.all((lecturers) => {
        res.render('dosen/index', {
            dataDosen: lecturers
        });
    });
}

const create = (req, res) => {
    res.render('dosen/create');
}

const store = (req, res) => {
    const { nik, name, email, birth_date } = req.body;
    
    const dosenData = { nik, name, email, birth_date };
    
    const dosen = new Dosen();
    
    dosen.save(dosenData, (err, insertedNIK) => {
        if (err) {
            return res.render('dosen/create', { errors: 'Internal Server Error' });
        }
        res.redirect("/lecturer");
    });
}

module.exports = { index, create, store };
