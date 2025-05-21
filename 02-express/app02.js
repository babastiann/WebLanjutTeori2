const express = require("express")

const app = express()
app.use(express.urlencoded({
    extended: false
}))

app.use("/page01", (req,res) => {
    console.log("jalan cok")
    res.send(`
    <h1> Selamat Datang Di Page01 </h1>
            <form method="post" action="page02">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required autofocus>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Your password" required autofocus>
                </div>
                <div>
                    <input type="submit" value="Login">
                </div>
            </form>`)
})

app.use("/page02", (req,res) => {
    console.log("Welcome to Page02")
    console.log("Data from page 1: ", req.body)
    res.send("<h1>Page02 </h1<")
})

app.use("/", (req,res) => {
    console.log("jalan cok")
    res.send(`<h1> Selamat Datang Di Welcome </h1>`)
})

app.listen(8000, () => {
    console.log("servernya di 8000")
})