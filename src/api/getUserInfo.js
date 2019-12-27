const {UserTable} = require("../db/api/tables")
// 只能根据自己的cookie获取自己的用户信息
async function getUserInfo(req, res) {
  let token = req.cookies.token
  let result = await UserTable.findOne({token})
  let {avatarPath, sex, user, userType,nickname} = result
  res.send({
    code: 0,
    message: '查询成功',
    data: {
      userInfo: {avatarPath, sex, user, userType, nickname}
    }
  })
}

module.exports = getUserInfo
