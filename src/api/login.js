// 用户登录的
const userMode = require("../db/userMode")
const getHash = require("../utils/getHash")
// 获取管理员hash值, 对比用
let adminHash = require('../utils/getUserTableHash')
async function login(req, res) {
  // adminHash = await adminHash
  // // 判断cookie存在
  // if(req.cookies.token === adminHash){
  //   res.send({
  //     code: 0,
  //     message: "用户已经登录",
  //     data: {cookie: {token: adminHash}}
  //   })
  //   return
  // }
  userMode.checkUser(req.query)
    .then(msg => {
      // 写入cookie
      const {user, password} = req.query
      let hash = getHash({user,password})
      if(msg.code === 0){
        res.cookie("token",hash,{maxAge: 1000*60*60*24, httpOnly: true});
      }else{
        hash = ""
      }
      res.send(Object.assign(msg, {data: {cookie: {token: hash}}}))
    })
}

module.exports = login
