const userMode = require("../db/userMode")

function login(req, res) {
  userMode.addUser(req.query)
  .then((msg)=>res.send(msg))
}
module.exports = login
