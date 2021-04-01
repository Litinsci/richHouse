const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb){
        // debugger;
        cb(null, 'public/images')
    },
    filename(req, file, cb){
        // debugger;
        const date = moment().format('MMMM Do YYYY, h:mm:ss a')
        cb(null, `${date}-${file.originalname}`)
    }
})


module.exports = multer({
    storage : storage
})