const express = require("express")
const ruoter = express.Router()
// api router
ruoter.get("/api/login", require("./api/login.js"))
ruoter.get("/api/adduser", require("./api/adduser.js"))
ruoter.get("/api/checktoken", require("./api/checktoken.js"))
ruoter.get("/api/logout", require("./api/logout.js"))
ruoter.get("/api/user/login", require("./api/consumer.js"))
//page router
// ruoter.get("*", require("./pages/any.js"))
// ruoter.get("/main", require("./pages/main.js"))
// ruoter.get("/login", require("./pages/login.js"))
// ruoter.get("/logout", require("./pages/logout.js"))


module.exports = ruoter
