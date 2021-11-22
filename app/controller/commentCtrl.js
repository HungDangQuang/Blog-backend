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


}