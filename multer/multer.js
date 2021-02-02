var multer  = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: 'my-uploads',
    filename: async function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

  module.exports = upload;