const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (request, response, next) => {
    // get token from header of request
    const token = request.header('Authorization');

    // check token exist
    if (!token) return response.status(401).send({message: 'Access Denied'});

    try {
        // verify token
        const accessTokenSecret = process.env.SECRET

        const verified = jwt.verify(token, accessTokenSecret);
        next();
    } catch (err) {
        return response.status(400).json({message: 'Invalid Token'});
    }
};