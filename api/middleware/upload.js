const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const {
            fieldname, // field name that send as formdata
            originalname
        } = file
        const nameParts = originalname.split(".")
        const ext = nameParts[nameParts.length - 1]
        const newName = fieldname + '-' + uniqueSuffix + "." + ext
        cb(null, newName)
    }
})

const upload = multer({ storage: storage })

module.exports = upload