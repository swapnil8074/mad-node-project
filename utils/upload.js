const multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        var orgName =  file.originalname.split('.');
        let ext =  orgName.pop();
        cb( null, `${orgName.join('.')}-${Date.now()}.${ext}`);

    }
  })
   
  var upload = multer({ storage: storage });

  module.exports =  upload;