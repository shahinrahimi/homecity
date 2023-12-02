const fs = require("fs")

module.exports = async (arrayFiles) => {
    const existedFiles = await Promise.all(arrayFiles.filter(file => fs.existsSync(file)))
    const deleteFiles = await Promise.all(existedFiles.map(file => fs.unlinkSync(file)))
    return deleteFiles
}