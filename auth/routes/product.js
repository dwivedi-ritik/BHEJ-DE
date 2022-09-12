const fs = require("fs")
const express = require("express")
const whenAuthorised = require("../middleware/authrise")
const router = express.Router()

const products = fs.readFileSync("./products.json")

router.get("/getAllProducts", whenAuthorised, (req, res) => {
    let { limit } = req.query
    let data = JSON.parse(products)
    if (limit) {
        data = data.products.slice(0, limit)
    }
    res.setHeader("Content-Type", "application/json")
    res.status(200).send(data)
})

router.get("/getProductById", whenAuthorised, (req, res) => {
    const { id } = req.query
    let data = JSON.parse(products)
    for (let product of data.products) {
        if (product.id === parseInt(id)) {
            return res.json(product)
        }
    }
    return res.json({ error: "no product" })

})



module.exports = router



