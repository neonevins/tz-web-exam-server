const adminHash = require('./adminHash')

function checktoken(req, res) {
   adminHash.then(hash => {
     if(!hash){
       res.send({
         code: 4,
         message: "用户被禁用"
       })
       return
     }
     if(req.query.token === hash) {
       res.send({
         code: 0,
         message: "验证成功"
       })
       return
     }

     if(req.cookies.token === hash){
       res.send({
         code: 0,
         message: "验证成功"
       })
     } else {
       res.send({
         code: 1,
         message: "验证失败"
       })
     }
   })

}

module.exports = checktoken
