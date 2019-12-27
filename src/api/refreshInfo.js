const fs = require("fs")
const path = require("path")
const UserTable = require("../db/api/tables")
function refreshInfo(req, res) {

  const {nickname, sex, avatarPath} = req.body
  res.send({nickname, sex, avatarPath})
  // if(avatarPath.length > 100){
  //   // 后缀
  //   let extra = /^data:image\/(?<extra>\w+);base64,/.exec(avatarPath).groups.extra
  //   let base64 = avatarPath.replace(/^data:image\/\w+;base64,/, "")
  //   const buffer = Buffer.from(base64, 'base64')
  //   let targetPath = path.resolve(__dirname, '../../uploads/avatar')
  //   let filename = new Date()
  //   fs.writeFileSync(`${targetPath}/${filename}.${extra}`, buffer)
  //   const path = `http://47.104.155.140/avatar/${filename}.${extra}`
  //   UserTable.updateOne(
  //     {token:req.cookies.token},
  //     {$set:{nickname, sex, avatarPath: path}}),
  //     function () {
  //       res.send({
  //         code: 0,
  //         msg: "更新成功",
  //         data: {
  //           userInfo: {
  //             nickname, sex, avatarPath: path
  //           }
  //         }
  //       })
  //     }
  // }else{
  //   UserTable.updateOne(
  //     {token:req.cookies.token},
  //     {$set:{nickname, sex}},
  //     function () {
  //       res.send({
  //         code: 0,
  //         msg: "更新成功",
  //         data: {
  //           userInfo: {
  //             nickname, sex
  //           }
  //         }
  //       })
  //     })
  // }

}

module.exports = refreshInfo
