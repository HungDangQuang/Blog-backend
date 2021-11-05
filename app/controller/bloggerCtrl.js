const Blogger = require('../models/blogger')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    register: async(req,res,next)=>{
        try {

            // Get User Info
            const email = req.body.email
            const password = req.body.password

            // check wether email or passsword is empty
            if(!email || !password){
                return res.status(400).json({message:"Email or Password Must Not Be Empty"})

            }

            // hash password
            const hashPass = await bcrypt.hash(password,10)

            // create new Blogger
            const newBlogger = new Blogger({email,password:hashPass})

            // save blogger
            await newBlogger.save()

            // return new blogger
            return res.status(201).json({user:newBlogger, message:'Create new user successfully'})
        }
        catch(err){
            next(err)
        }
    }
}