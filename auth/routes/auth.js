const { Router } = require("express")
const User = require("../database/model/user.js")

const router = Router()

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    if (req.session.username) {
        req.session.destroy()
    }
    const dbQuery = await User.findOne(req.body)
    if (!dbQuery) {
        return res.json({ error: "wrong crendentials" })
    }
    req.session.username = username
    return res.json(req.session)
})

router.post("/register", async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        if (req.session.username) {
            req.session.destroy()
        }
        const newuser = new User({
            username, password, email
        })
        const newuserRes = await newuser.save()
        req.session.username = newuserRes.username
        return res.json(newuserRes)
    }
    catch (e) {
        console.log(e)
    }
})

router.post("/logout", (req, res) => {
    if (req.session.username) {
        req.session.destroy()
        return res.json({ msg: "user successfully logged out" })
    }
    return res.json({ msg: "no logged in user" })

})

router.get("/isLog", (req, res) => {
    return res.json(req.session)
})

module.exports = router