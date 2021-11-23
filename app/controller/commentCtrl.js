const Comment = require('../models/comments')

module.exports = {
    createComment :async(req,res) => {
        try{
            const comment = await new Comment(req.body)
            comment.save()
            res.status(200).json('Comment saved')
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    getAll: async(req,res) => {
        try{
            let comments = await Comment.find()
            res.status(200).json(comments)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    getOne: async(req,res) => {
        try{
            let comment = await Comment.findById(req.params.id)
            res.status(200).json(comment)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    deleteOne: async(req,res) => {
        try{
            let comment = await Comment.findById(req.params.id)
            await comment.delete()
            res.status(200).json("Comment deleted successfully")
            return
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}