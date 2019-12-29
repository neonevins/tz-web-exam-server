
const getUserTableHash = require('../utils/getUserTableHash')

function verify(req, res, next) {
  // TODO 对访问api的权限进行控制, 验证token
  getUserTableHash(req.cookies.token)
  .then(result => {
    if(result && result.code === 0){
      console.log("go next")
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
