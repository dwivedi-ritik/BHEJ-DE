function whenAuthorised(req, res, next) {
    if (!req.session.username) {
        return res.status(401).send("unauthorized")
    }
    next()
}

module.exports = whenAuthorised