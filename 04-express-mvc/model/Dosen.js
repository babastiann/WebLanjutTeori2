const lecturers = [
    {nik: "000001" , name: "John Doe" , email: "John.doe@email.com", birth_date: "1997-05-08"},
    {nik: "000002" , name: "Susan Bones" , email: "superbones@email.com", birth_date: "1992-11-12"}
]

class Dosen {

    constructor() {

    }

    all() {
        return lecturers
    }

    save(lecturer) {
        lecturers.push(lecturer)
    }
}

module.exports = Dosen