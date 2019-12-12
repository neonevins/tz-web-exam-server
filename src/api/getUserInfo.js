const {UserTable} = require("../db/api/tables")
// 只能根据自己的cookie获取自己的用户信息
async function getUserInfo(req, res) {
  if(!req.cookies.token){
    res.send({
      code: 1,
      message: '用户不存在, 请登录',
      data: {}
    })
    return
  }
  let token = req.cookies.token
  let result = await UserTable.findOne({token})
  if(!result){
    res.send({
      code: 1,
      message: '用户不存在, 请清空缓存',
      data: {}
    })
    return
  }
  let {avatarPath, sex, user, userType} = result
  res.send({
    code: 0,
    message: '查询成功',
    data: {avatarPath, sex, user, userType}
  })
  console.log(result)
}

module.exports = getUserInfo
