const {UserTable} = require("../db/api/tables")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatar')
  },
  filename: function (req, file, cb) {
    const name = new Date().valueOf() +file.originalname.match(/\..*?$/)[0]
    cb(null, name)
  }
})

const upload = multer({ storage: storage })

async function uploadHandle(req, res) {
  console.log(req.cookies)
  const avatarPath = "/avatar/"+req.file.filename
  if(!req.cookies.token){
    res.send({
      code: 1,
      message: "用户凭证错误",
      data: {
        avatarPath: ""
      }
    })
  } else {
    await UserTable.updateOne({token: req.cookies.token},{$set:{avatarPath}})
    res.send({
      code: 0,
      message: "上传成功",
      data: {
        avatarPath
      }
    })
  }

}

module.exports = {
  upload,
  uploadHandle
}
