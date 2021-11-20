const Post = require('../models/posts')

module.exports = {
    createPost: async (req,res,next)=>{

        console.log(req.body)

        try{
            const post = await new Post(req.body)
            post.save()

            res.status(200).json('blog saved sucessfully')
        } catch(err){
            res.status(500).json(err)
        }
    },

    getAll: async(req,res) => {
        try{
            let posts = await Post.find()
            res.status(200).json(posts)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    getOne: async(req,res) => {
        try{
            let post = await Post.findById(req.params.id)
            res.status(200).json(post)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    updateOne: async(req,res) => {
        try {
            await Post.findByIdAndUpdate(req.params.id,{$set: req.body})
            res.status(200).json("Blog updated successfully")
        }
        catch(err){
            res.status(500).json(err)
        }
    }

}