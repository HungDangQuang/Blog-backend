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

    getAll: async(req,res,next) => {
        try{
            let posts = Post.find({})
            res.status(200).json(posts)
        }
        catch(err){
            res.status(500).json(err)
        }
    }

}