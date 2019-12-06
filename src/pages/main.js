const getHash = require("../utils/getHash")
const admin = {
  user: "yinshi",
  password: "123"
}
const adminHash = getHash(admin)

function main(req, res) {
  if(adminHash === req.cookies.token){
    res.send("hello 管理员")
  }else{
    res.redirect("/login")
  }
}

module.exports = main
