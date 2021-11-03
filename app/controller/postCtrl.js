const Post = require('../models/posts')

module.exports = {
    createPost: async (req,res,next)=>{

        console.log(req.body)

        try{
            await new Post(req.body)
            res.status(200).json('blog saved sucessfully')
        } catch(err){
            res.status(500).json(err)
        }
    }
}