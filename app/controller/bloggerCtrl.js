const Blogger = require('../models/blogger')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Token = require('../models/token')
dotenv.config()

module.exports = {
    register: async(req,res,next)=>{
        try {

            // Get User Info
            const username = req.body.username
            const email = req.body.email
            const password = req.body.password

            // check wether email or passsword is empty
            if(!email || !password || !username){
                return res.status(400).json({message:"Email or Password or Username Must Not Be Empty"})

            }

            // check wether email is duplicated
            const query = await Blogger.findOne({email})
            if(query){
                return res.status(400).json({message:"This Email Has Already Used"})
            }
            // hash password
            const hashPass = await bcrypt.hash(password,10)

            // create new Blogger
            const newBlogger = new Blogger({username,email,password:hashPass})

            // save blogger
            await newBlogger.save()

            // return new blogger
            return res.status(201).json({user:newBlogger, message:'Create new user successfully'})
        }
        catch(err){
            next(err)
        }
        res.send("heelo")
    },

    login: async(req,res,next)=>{

        const email = req.body.email
        const password = req.body.password

        if(!email || !password){
            return res.status(400).json({message:"Email or Password Must Not Be Empty"})
        }

        const user = await Blogger.findOne({email})
        if(!user){
            return res.status(401).send("Wrong Username or Password")
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password)

        if(!isPasswordValid) {
            return res.status(401).send("Wrong Username or Password")
        }

        const accesstokenLife = 24 * 3600
        const secret = process.env.SECRET

        const dataForAccessToken = {
            username: user.username
        }

        const accessToken = await jwt.sign(dataForAccessToken, secret,{
            algorithm:"HS256",
            expiresIn: accesstokenLife
        })

        if(!accessToken){
            return res.status(400).send("Login Failed")
        }

        var storedToken = new Token({
            token: accessToken,
            user: user._id,
            expires: Date.now() + accesstokenLife
        })

        storedToken.save()
        
        return res.status(200).json({
            message: "Login Successfully"
        })
    }
}