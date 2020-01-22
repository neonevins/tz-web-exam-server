const express = require("express");
const router = express.Router();


// 用户登录验证
router.get("/api/login", require("./api/login.js"));

// api router
// 验证用户的权限
router.all("/api/*", require("./api/verify"));

// 添加用户, 返回添加成功或者失败
// TODO 目前功能关闭
// router.get("/api/addUser", require("./api/adduser.js"))

// 检查cookie的token或者传入的token, 返回用户状态
router.get("/api/checkToken", require("./api/checktoken.js"));

// 登出, 清除token
router.get("/api/logout", require("./api/logout.js"));

// 返回 题型列表
router.get("/api/topicCategoryList", require("./api/getTopicCategoryList.js"));

// 根据cookie token查询用户信息
router.get("/api/getUserInfo", require("./api/getUserInfo.js"));

// 上传更新用户的信息
router.post("/api/goudan", require("./api/refreshInfo.js"));

// 上传图片
const {upload, uploadHandle} = require("./api/upload.js");
// router.post("/api/upload", upload.single("file"), uploadHandle)

/*管理员题目操作*/
/*添加题目*/
router.get("/api/questionAdd",require("./api/questionAdd"));
/*查询所有题目*/
router.get("/api/questionSearch",require("./api/questionSearch"));
/*修改题目*/
router.get("/api/questionUpdate",require("./api/questionUpdate"));
/*删除题目*/
router.get("/api/questionDelete",require("./api/questionDelete"));


/*返回十道题*/
router.get("/api/questionGet",require("./api/questionGet"));
/*答案提交*/
router.post("/api/answerCommit",require("./api/answerCommit"));

module.exports = router;
