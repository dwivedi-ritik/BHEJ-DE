const path = require("path")
const express = require("express")
const session = require("express-session")
const mongoose = require("mongoose")

const app = express()

const productRoute = require("./routes/product.js")
const authRoute = require("./routes/auth.js")

const oneDay = 1000 * 60 * 60 * 24;

require("dotenv").config()

app.use(session({
    cookie: { maxAge: oneDay },
    secret: "jkjsbaksjka",
    saveUninitialized: false,
    resave: false
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", productRoute)
app.use("/api/auth", authRoute)


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "home.html"))
})

app.listen(process.env.PORT || 8000, () => {
    mongoose.connect("mongodb://127.0.0.1:27017/test")
        .then(() => {
            console.log(`Application is running at ${process.env.PORT || 8000}`)
            console.log("Database succesfully configured")
        })
})