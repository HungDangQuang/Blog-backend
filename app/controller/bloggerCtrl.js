const Blogger = require('../models/blogger')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
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
    },

    login: async(req,res,next)=>{

        try{
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

            const accessTokenLife = "10h";
            const accessTokenSecret = "ACCESS_TOKEN_SECRET";

            const dataForAccessToken = {
                id: user._id
            };
            const accessToken = jwt.sign(dataForAccessToken, accessTokenSecret, {
                algorithm: "HS256",
                expiresIn: accessTokenLife,
            });
            if (!accessToken) {
                return res.status(401).send("Login Failed!");
            }
            return res.status(200).json({
                msg: "Login Success.",
                accessToken,
                id: user.id
              });
        }
        catch(err){
            next(err)        
        }
    },

    getAll: async(req,res) => {
        try{
            let users = await Blogger.find()
            res.status(200).json(users)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    getOne: async(req,res) => {
        try{
            let user = await Blogger.findById(req.params.id)
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    updateOne: async(req,res) => {
        try {
            await Blogger.findByIdAndUpdate(req.params.id,{$set: req.body})
            res.status(200).json("User updated successfully")
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    deleteOne: async(req,res) => {
        try{
            let user = await Blogger.findById(req.params.id)
            await user.delete()
            res.status(200).json("User deleted successfully")
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}