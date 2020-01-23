
const getUserTableHash = require('../utils/getUserTableHash')

function verify(req, res, next) {
  getUserTableHash(req.cookies.token)
  .then(result => {
    if(result && result.code === 0){
      console.log("权限验证成功")
      next()
    }else{
      res.send({
        code: 1,
        message: "token无效或者cookie无效",
        data: {cookie: {}}
      })
    }
  })
}


module.exports = verify
