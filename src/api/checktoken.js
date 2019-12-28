const getUserTableHash = require('../utils/getUserTableHash')

async function checktoken(req, res) {
  let token
  if(req.cookies.token){
    // 如果cookie里面有token
    token = req.cookies.token
  }else if(req.query.token){
    // 如果参数携带token
    token = req.query.token
  }else{
    token = ""
  }

  let result = await getUserTableHash(token)
  res.send(result)



   // adminHash.then(hash => {
   //   // 如果
   //   if(!hash){
   //     res.send({
   //       code: 4,
   //       message: "用户被禁用",
   //       data: {cookie: {token: ""}}
   //     })
   //     return
   //   }
   //   if(req.cookies.token === hash){
   //     res.send({
   //       code: 0,
   //       message: "验证成功",
   //       data: {cookie: {token: hash}}
   //     })
   //   } else {
   //     res.send({
   //       code: 1,
   //       message: "验证失败",
   //       data: {cookie: {token: ""}}
   //     })
   //   }
   //
   //
   //   if(req.query.token === hash) {
   //     res.send({
   //       code: 0,
   //       message: "验证成功",
   //       data: {cookie: {token: hash}}
   //     })
   //     return
   //   }
   // })

}

module.exports = checktoken
