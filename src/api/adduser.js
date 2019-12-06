const userMode = require("../db/adminMode")

function login(req, res) {
  // TODO 判断用户权限
  // console.log(req.h)
  userMode.addUser(req.query)
  .then((msg)=>res.send(msg))
}
module.exports = login
