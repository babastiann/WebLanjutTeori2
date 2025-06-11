const mysql = require("mysql")
const config = require('../config/database')

class Dosen {

    constructor() {
        this.db = mysql.createConnection(config.db)
        this.db.connect((error) => {
            if(error) throw error
            console.log("Connected to MySQL Server")
        })
    }

    all(callback) {
        const sql = "SELECT nik, name, email, birth_date FROM dosen"
        this.db.query(sql, (error, results, fields) => {
            if (error) {
                console.log(error)
            }
            this.db.end()
            callback(results)
        })
    }

    save(lecturer, callback) {
        const sql = "INSERT INTO dosen(nik, name, email, birth_date) VALUES(?, ?, ?, ?)"  
        this.db.query(sql, [lecturer.nik, lecturer.name, lecturer.email, lecturer.birth_date], (error, results, fields) => {
            if(error) {
                console.log(error)
            }
            this.db.end()
            callback(results)
        })  
    }
}

module.exports = Dosen