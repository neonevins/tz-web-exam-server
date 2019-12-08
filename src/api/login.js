// 用户登录的
const adminMode = require("../db/adminMode")
const getHash = require("../utils/getHash")
// 获取管理员hash值, 对比用
const adminHash = require('./adminHash')
function login(req, res) {
  console.log(req.cookies.token, adminHash)
  // 判断cookie存在
  if(req.cookies.token === adminHash){
    res.send({
      code: 0,
      message: "用户已经登录"
    })
    // console.log("cookie存在, 跳转到主页")
    return
  }
  adminMode.checkUser(req.query)
    .then(msg => {
      // 写入cookie
      const {user, password} = req.query
      const hash = getHash({user,password})
      if(msg.code === 0){
        console.log(hash)
        res.cookie("token",hash,{maxAge: 900000, httpOnly: true});
        res.send(Object.assign(msg, {data: {cookie: {token: hash}}}))
      }else{
        res.send(Object.assign(msg, {data: {cookie: {token: ""}}}))
      }
    })
}

module.exports = login
