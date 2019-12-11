const express = require("express")
const router = express.Router()
// api router

// 添加用户, 返回添加成功或者失败
router.get("/api/adduser", require("./api/adduser.js"))

// 检查token, 返回用户状态
router.get("/api/checktoken", require("./api/checktoken.js"))

// 登出, 清除token
router.get("/api/logout", require("./api/logout.js"))

// 用户登录验证
router.get("/api/login", require("./api/login.js"))

module.exports = router
