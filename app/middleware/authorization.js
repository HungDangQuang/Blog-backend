const User = require('../models/blogger')

module.exports = async(request, response, next) => {
    try{
        const user = await User.findById(request.token.id)
        console.log(user)
        if(user.role == "admin"){
            next()
        }
        else {
            return response.status(403).json("No Permission")
        }
    } 
    catch(err){
        console.log(err)
        response.status(500).json(err)
    }
};