import multer from "multer";



// file store in public folder with multer code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
    //   cb(null, file + '-' + uniqueSuffix)
      cb(null, file.originalname)
    }
  })

export const upload = multer({storage})