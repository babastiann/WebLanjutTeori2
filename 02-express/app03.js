const express = require("express")

const app = express()
const myRouter = require("./route/route.js")

app.use(express.urlencoded({
    extended: false
}))

app.use(myRouter)
app.use((req, res) => {
    req.status(404).send(`
        <h1> Error 404 </h1>
        <a href="/"> Go Bek bek bek bek</a>
    `)
})

app.listen(8000, () => {
    console.log("servernya di 8000")
})