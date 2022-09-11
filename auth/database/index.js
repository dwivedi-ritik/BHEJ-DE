const User = require("./model/user.js")

async function addNewUser(user) {
    const newUser = new User(user)
    return await newUser.save()
}

async function isPresent(user) {
    return User.exists(user)
}

module.exports = {
    addNewUser, isPresent
}
