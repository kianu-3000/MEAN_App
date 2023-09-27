const jwt = require('jsonwebtoken');

const maxTime = 3 * 24 * 60 * 60 // age of the jwt in seconds
const generateToken = (token) => {
    return jwt.sign({token}, process.env.TOKEN, {expiresIn: maxTime});
}

module.exports = {
    generateToken
}