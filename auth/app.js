const express = require("express")
const session = require("express-session")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`Hello There`)
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Application is running at ${process.env.PORT || 8000}`)
})