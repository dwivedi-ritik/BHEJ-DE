const express = require("express")
const session = require("express-session")
const path = require("path")
require("dotenv").config()
const app = express()

const router = require("./API/product.js")


const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    cookie: { maxAge: oneDay },
    secret: "jkjsbaksjka",
    saveUninitialized: true,
    resave: false

}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

const sessions = []

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "home.html"))
})

app.post("/", (req, res) => {
    const { username, password } = req.body
    if (username !== 'root' || password !== 'root') {
        return res.status(401).send('unauthorized')
    }
    res.send(req.session)
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Application is running at ${process.env.PORT || 8000}`)
})