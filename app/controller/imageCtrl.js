const grid = require('gridfs-stream')
const mongoose = require('mongoose')

const gfs
const conn = mongoose.connection
conn.once('open',()=>{
    gfs = grid(conn.db, mongoose.mongo)
    gfs.connection('fs')
})

module.exports = {
    uploadImage = async(req,res) => {
        try{
            if(!req.file){
                return res.status(404).json('file not found')
            }
            res.status(200).json("upload successful")
        }
        catch(err){
         res.status(500).json(err)   
        }
    },

    getImage = async(req,res) => {
        try{
            const file = await gfs.file.findOne({filename: req.params.filename})
            const readSteam = gfs.createReadStream(file.filename)
            readSteam.pipe(res)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}