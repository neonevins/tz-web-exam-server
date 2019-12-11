const userMode = require("../db/userMode")

function login(req, res) {
  // TODO 判断用户权限

  userMode.addUser(req.query)
  .then((msg)=>res.send(msg))
}
module.exports = login
