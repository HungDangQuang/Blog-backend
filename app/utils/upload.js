const GridFsStorage = require('multer-gridfs-storage')
const dotenv = require('dotenv')
const multer = require('multer')
dotenv.config()

const storage = new GridFsStorage({
    url: process.env.DB_CONN,
    options: {useUnifiedTopology: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"]
        if(match.indexOf(file.mimetype) == -1){
            return `${Date.now()}-blog-${file.originalname}`
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage})