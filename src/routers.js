const express = require("express")
const router = express.Router()
const getUserTableHash = require('./utils/getUserTableHash')

// 用户登录验证
router.get("/api/login", require("./api/login.js"))

// api router
router.get("/api/*", function (req, res, next) {
  console.log("进入api组件")
  // TODO 对访问api的权限进行控制, 验证token
  getUserTableHash(req.cookies.token)
    .then(result => {
      console.log(result)
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
})

// 添加用户, 返回添加成功或者失败
// TODO 目前功能关闭
// router.get("/api/addUser", require("./api/adduser.js"))

// 检查cookie的token或者传入的token, 返回用户状态
router.get("/api/checkToken", require("./api/checktoken.js"))

// 登出, 清除token
router.get("/api/logout", require("./api/logout.js"))

// 返回 题型列表
router.get("/api/topicCategoryList", require("./api/getTopicCategoryList.js"))

// 根据cookie token查询用户信息
router.get("/api/getUserInfo", require("./api/getUserInfo.js"))

// 上传图片
const {upload, uploadHandle} = require("./api/upload.js")
router.post("/api/upload", upload.single("file"), uploadHandle)

module.exports = router
