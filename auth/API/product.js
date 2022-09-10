const fs = require("fs")
const express = require("express")
const router = express.Router()

const products = fs.readFileSync("./API/products.json")

router.get("/getAllProducts", (req, res) => {
    let { limit } = req.query
    let data = JSON.parse(products)
    if (limit) {
        data = data.products.slice(0, limit)
    }
    res.setHeader("Content-Type", "application/json")
    res.status(200).send(data)
})



module.exports = router



