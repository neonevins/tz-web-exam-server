const express = require("express")
const router = express.Router()
// api router

// 添加用户, 返回添加成功或者失败
router.get("/api/addUser", require("./api/adduser.js"))

// 检查token, 返回用户状态
router.get("/api/checkToken", require("./api/checktoken.js"))

// 登出, 清除token
router.get("/api/logout", require("./api/logout.js"))

// 用户登录验证
router.get("/api/login", require("./api/login.js"))

// 上传图片
const {upload, uploadHandle} = require("./api/upload.js")
router.post("/api/upload", upload.single("file"), uploadHandle)

// 根据cookie token查询用户信息
router.get("/api/getUserInfo", require("./api/getUserInfo.js"))

module.exports = router
