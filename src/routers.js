const express = require("express")
const router = express.Router()
// api router
router.get("/api/adduser", require("./api/adduser.js"))
router.get("/api/checktoken", require("./api/checktoken.js"))
router.get("/api/logout", require("./api/logout.js"))
router.get("/api/user/login", require("./api/consumer.js"))
router.get("/api/login", require("./api/login.js"))

module.exports = router
